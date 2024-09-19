from constants import *
from app import *

def prazo_total_obra(aed, alc):
    # Determine prazo_infra
    for limite, prazo in sorted(PAZOS_INFRA.items()):
        if alc <= limite:
            prazo_infra = prazo
            break
    else:
        prazo_infra = round(alc / PAZOS_INFRA_MAX) + 10

    # Determine prazo_edificacao
    if aed <= 1500:
        prazo_edificacao = PAZOS_EDIFICACAO[1500]
    elif aed <= 3000:
        prazo_edificacao = PAZOS_EDIFICACAO[3000]
    else:
        prazo_edificacao = PAZOS_EDIFICACAO_DEFAULT

    prazo_total_obra = (prazo_edificacao + prazo_infra) - 6  # Só se aplica quando o prazo for > 12 meses
    total_total_prazo_obra = max(prazo_total_obra, PAZOS_TOTAL_MIN)

    return total_total_prazo_obra, prazo_edificacao, prazo_total_obra

def calc_custo_terraplanagem(topografia_predominante, volume_aterro, volume_corte,
                             regiao_litoranea, areas_privativas_lotes, area_mata_a_ser_cortada,
                             area_total_sistema_viario):
    if topografia_predominante == 0:
        fator_calc_topo = 0
        tipo_de_topo = 'Plana'
    elif topografia_predominante == 1:
        tipo_de_topo = 'Ondulada'
        fator_calc_topo = 0.05
    else:
        tipo_de_topo = 'Acidentada'
        fator_calc_topo = 0.15

    if volume_aterro > volume_corte:
        diferenca_aterro_corte = volume_aterro - volume_corte
        aterro_corte = diferenca_aterro_corte * ATERRO_MAIOR_CORTE
    else:
        aterro_corte = 0

    if regiao_litoranea == 0:
        custos_regiao_litoranea = 0
    else:
        custos_regiao_litoranea = areas_privativas_lotes * SE_REGIAO_LITORANEA

    terraplanagem_mata = CUSTO_DESMATAMENTO * area_mata_a_ser_cortada
    terraplanagem_sistema_viario = CUSTO_DECAPAGEM * area_total_sistema_viario
    terraplanagem_volume_corte = CUSTO_ESCAVACAO * volume_corte
    terraplanagem_volume_aterro = CUSTO_ATERRO * volume_aterro
    terraplanagem_sub_total = (terraplanagem_mata + terraplanagem_sistema_viario +
                              terraplanagem_volume_corte + terraplanagem_volume_aterro
                              + aterro_corte + custos_regiao_litoranea)

    valor_predominante = terraplanagem_sub_total * fator_calc_topo
    terraplanagem_total = terraplanagem_sub_total + valor_predominante

    return terraplanagem_total, aterro_corte, terraplanagem_volume_corte, terraplanagem_mata, terraplanagem_sistema_viario, custos_regiao_litoranea, valor_predominante, terraplanagem_volume_aterro

def calcular_custo_rede_pluvial(area_total_sistema_viario, testada_media, qnt_lotes,
                                total_eixos_vias, topografia_predominante, solo_predominante, local_lancamento_pluvial):
    custo_rede_pluvial = ((area_total_sistema_viario * testada_media * qnt_lotes) / total_eixos_vias) * 30

    fator_calc_topo_pluv = FACTOR_TOPO_PLUV.get(topografia_predominante, 0.5)
    fator_calc_solo, tipo_de_solo = FACTOR_SOLO.get(solo_predominante, (0.10, 'Desconhecido'))
    tipo_fator_lancamento, tipo_de_lancamento = FACTOR_LANCAMENTO.get(local_lancamento_pluvial, (0.10, 'Desconhecido'))

    fator_fator_topo = custo_rede_pluvial * fator_calc_topo_pluv
    fator_solo = custo_rede_pluvial * fator_calc_solo
    fator_lancamento = custo_rede_pluvial * tipo_fator_lancamento

    custo_custo_rede_pluvial = custo_rede_pluvial - fator_fator_topo

    if topografia_predominante == 0:
        total_pluvial = custo_rede_pluvial + fator_fator_topo + fator_solo + fator_lancamento
        fator_topo = fator_fator_topo
    elif topografia_predominante == 1:
        total_pluvial = custo_rede_pluvial + fator_fator_topo + fator_solo + fator_lancamento
        fator_topo = '-'
    else:
        total_pluvial = custo_custo_rede_pluvial + fator_solo + fator_lancamento
        fator_topo = fator_fator_topo

    return custo_rede_pluvial, fator_topo, fator_solo, fator_lancamento, total_pluvial

########## ÁGUA ##########

def calcular_custo_agua(qnt_lotes, testada_media, solo_predominante):
    custo_agua = (CUSTO_BASE_AGUA * qnt_lotes) + (CUSTO_TESTADA_AGUA * testada_media * qnt_lotes)

    fator_calc_agua = FACTOR_SOLO_AGUA.get(solo_predominante, 0.20)

    fator_agua_solo = custo_agua * fator_calc_agua
    total_agua = custo_agua + fator_agua_solo
    return custo_agua, total_agua, fator_agua_solo

def calcular_custo_energia(total_eixos_vias, qnt_lotes, tipo_empreendimento, regiao_litoranea):
    custo_rede_primaria = total_eixos_vias * 0.7 * REDE_PRIMARIA / 1000
    custo_rede_secundaria = total_eixos_vias * 0.3 * REDE_SECUNDARIA / 1000
    custo_subestacao = qnt_lotes * 4.5 / 75 * SUBESTACAO
    custo_luminaria = total_eixos_vias / 30 * LUMINARIA_SODIO

    custo_tipo_empreendimento = CUSTO_TIPO_EMPREENDIMENTO.get(tipo_empreendimento, 0.00)

    sub_total_energia = (custo_rede_primaria + custo_rede_secundaria +
                        custo_subestacao + custo_luminaria +
                        custo_tipo_empreendimento)

    calculo_se_litoral_energia = sub_total_energia * FACTOR_LITORANEA if regiao_litoranea != 0 else 0

    tipo_empreend_sera = 'Loteamento' if tipo_empreendimento == 0 else 'Condomínio'
    empreendimento_travessia = CUSTO_TRAVESSIA if tipo_empreendimento != 0 else 0

    total_travessia = empreendimento_travessia * qnt_lotes
    total_eletrica = sub_total_energia + calculo_se_litoral_energia + total_travessia

    return total_eletrica, total_travessia, custo_rede_primaria, calculo_se_litoral_energia, custo_rede_secundaria, custo_subestacao, custo_luminaria, custo_tipo_empreendimento

########## EBE / ETE / CLOACAL ##########

def calcular_total_ebe(ebe, qnt_lotes, solo_predominante, nmr_estacoes_bombeamento_esgoto):
    if ebe == 0:
        return 0

    if qnt_lotes == 150:
        custo_lote = CUSTO_LOTE_BASE
    elif qnt_lotes <= 400:
        lotes_excedentes = qnt_lotes - 150
        custo_lote = CUSTO_LOTE_BASE + (VALOR_LOTES_EXCEDENTES * lotes_excedentes)
    elif qnt_lotes > 400:
        lotes_excedentes = qnt_lotes - 400
        custo_lote = (CUSTO_LOTE_BASE + (VALOR_LOTES_EXCEDENTES * (400 - 150)) +
                      (VALOR_LOTES_EXCEDENTES_ADICIONAIS * lotes_excedentes))
    else:
        custo_lote = CUSTO_LOTE_BASE

    acrescimo_solo = ACRESCIMO_SOLO.get(solo_predominante, 0.10)
    fator_tipo_solo = custo_lote * acrescimo_solo
    sub_total_ebe = fator_tipo_solo + custo_lote

    return nmr_estacoes_bombeamento_esgoto * sub_total_ebe

def calcular_total_ete(regiao_litoranea, qnt_lotes):
    habitantes_lote = 8 if regiao_litoranea == 1 else 5
    ete = qnt_lotes * habitantes_lote * 0.002407

    total_ete = next((custo for i, custo in enumerate(CUSTOS_ETE) if ete <= i + 2), CUSTOS_ETE[-1])
    return total_ete, habitantes_lote

def calcular_total_cloacal(topografia_predominante, solo_predominante, testada_media, qnt_lotes, total_ete, resultado_ebe):
    custo_topo_cloacal = CUSTO_TOPO_CLOACAL.get(topografia_predominante, 0.05)
    custo_solo_cloacal = CUSTO_SOLO_CLOACAL.get(solo_predominante, 0.20)

    custo_obra_cloacal = (testada_media * qnt_lotes * CUSTO_OBRA_CLOACAL) + (qnt_lotes * VALOR_ADICIONAL_CLOACAL)

    fator_topo_cloacal = custo_obra_cloacal * custo_topo_cloacal
    fator_solo_cloacal = custo_obra_cloacal * custo_solo_cloacal

    total_cloacal = (custo_obra_cloacal + fator_topo_cloacal +
                    fator_solo_cloacal) + total_ete + resultado_ebe

    return total_cloacal, custo_obra_cloacal, fator_topo_cloacal, fator_solo_cloacal

########## RESERVATÓRIOS ##########

def calcular_total_reservatorios(qnt_lotes, habitantes_lote, valor_reservatorios, reservatorios):
    calculo_volume = qnt_lotes * habitantes_lote * CONSTANTE_VOLUME

    if calculo_volume <= 100:
        multiplicador_volume = MULTIPLICADOR_VOLUME_1
    elif calculo_volume <= 400:
        multiplicador_volume = MULTIPLICADOR_VOLUME_2
    elif calculo_volume <= 700:
        multiplicador_volume = MULTIPLICADOR_VOLUME_3
    elif calculo_volume <= 1000:
        multiplicador_volume = MULTIPLICADOR_VOLUME_4
    else:
        multiplicador_volume = MULTIPLICADOR_VOLUME_5

    valor_reservatorios = float(valor_reservatorios)

    if reservatorios == 1:
        if valor_reservatorios >= 1:
            calculo_reservatorios = valor_reservatorios
            total_reservatorios = calculo_reservatorios
        else:
            calculo_reservatorios = 0
            total_reservatorios = (calculo_volume * multiplicador_volume) + calculo_reservatorios
    else:
        total_reservatorios = 0

    return total_reservatorios


########## MUROS ##########

valor_muro = VALOR_MURO  # Valor do muro

def calcular_paisagismo(tipo_empreendimento, total_arquiteturas, total_infra, total_despesas_mensais):
    if tipo_empreendimento == 1:
        if total_arquiteturas == 0:
            soma_paisa = (total_infra + total_despesas_mensais) * PAISA_TIPO_EMP1_NO_ARQUITETURAS
        else:
            soma_paisa = (total_infra + total_arquiteturas + total_despesas_mensais) * PAISA_TIPO_EMP1_COM_ARQUITETURAS
    else:
        if total_arquiteturas == 0:
            soma_paisa = (total_infra + total_despesas_mensais) * PAISA_TIPO_EMP0_NO_ARQUITETURAS
        else:
            soma_paisa = (total_infra + total_despesas_mensais) * PAISA_TIPO_EMP0_COM_ARQUITETURAS

    return soma_paisa

def calcular_total_sinalizacao(total_eixos_vias):
    """
    Calcula o total da sinalização.
    """
    return total_eixos_vias * 40

def calcular_total_paisagismo(padrao_empreendimento, soma_paisa, total_sinalizacao):
    if padrao_empreendimento == 2:
        total_paisa = soma_paisa * MULTIPLICADOR_PADAO_2
    elif padrao_empreendimento == 1:
        total_paisa = (soma_paisa * MULTIPLICADOR_PADAO_1) + total_sinalizacao
    else:
        total_paisa = soma_paisa + total_sinalizacao

    return total_paisa

# calc_functions.py

def calcular_total_incorporacoes(aquisicao_terreno, proj_licenc, registro_tabelionato, assessoria_consult, assistencia_tec, marketing_porcentagem, corretagem_porcentagem, impostos_vgv):
    """
    Calcula o total das incorporações.
    """
    return aquisicao_terreno + proj_licenc + registro_tabelionato + assessoria_consult + assistencia_tec + marketing_porcentagem + corretagem_porcentagem + impostos_vgv



def calcular_total_infra(total_saneamento, terraplanagem_total, total_passeio, total_agua, total_eletrica, total_reservatorios, total_muros, total_despesas_mensais, total_cercamento_app):
    """
    Calcula o total da infraestrutura.
    """
    return (total_saneamento + terraplanagem_total + total_passeio + total_agua + total_eletrica + 
            total_reservatorios + total_muros + total_despesas_mensais + total_cercamento_app)


def calcular_total_tudo(total_despesas_mensais, total_infra, total_paisa, total_arquiteturas, total_sinalizacao, total_incorporacoes):
    total_tudo = (total_despesas_mensais + total_infra + total_paisa +
                  total_arquiteturas + total_sinalizacao + total_incorporacoes)
    return total_tudo

