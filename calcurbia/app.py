from flask import Flask, request, jsonify
from calc_functions import (
    calcular_total_incorporacoes, calcular_total_sinalizacao, calcular_total_infra,
    calc_custo_terraplanagem, calcular_custo_rede_pluvial, calcular_custo_agua,
    calcular_custo_energia, calcular_total_ebe, calcular_total_ete,
    calcular_total_cloacal, calcular_total_reservatorios, calcular_total_paisagismo,
    calcular_total_tudo
)
from constants import *
from utils import process_request_data

app = Flask(__name__)

@app.route('/calcular', methods=['POST'])
def calcular():
    """
    Endpoint to calculate various costs and totals based on the input data.

    This endpoint receives data from the user in JSON format, processes it, 
    performs several calculations, and returns the results as JSON. The calculations include:
    - Acquisition costs
    - Project timelines
    - Cost calculations for land preparation, stormwater network, water supply, energy, and others
    - Total costs for various categories including incorporation, signage, infrastructure, and landscaping
    
    Returns:
        JSON: A JSON object containing the total cost and breakdown of various categories.
    """
    # Receive user data
    request_data = request.get_json()

    # Process the data using the utility function
    data = process_request_data(request_data)

    try:
        # Retrieve processed data
        vgv = data['vgv']
        valor_permuta = (data['permuta_vgv'] * vgv) / 100
        permuta = valor_permuta if data['aquisicao_terreno'] == 0 else 0
        vgv_liquido_permuta = vgv - valor_permuta
        total_aquisicao = data['valor_aquisicao'] if data['aquisicao_terreno'] == 1 else 0

        # Calculate construction timeline
        total_total_prazo_obra, prazo_edificacao, prazo_total_obra = prazo_total_obra(
            data['area_da_edificacao'], data['area_total_gleba']
        )

        # Cost calculations
        terraplanagem_total, aterro_corte, terraplanagem_volume_corte, terraplanagem_mata, terraplanagem_sistema_viario, custos_regiao_litoranea, valor_predominante, terraplanagem_volume_aterro = calc_custo_terraplanagem(
            data['topografia_predominante'], data['volume_aterro'], data['volume_corte'], 
            data['regiao_litoranea'], data['areas_privativas_lotes'], data['area_mata_a_ser_cortada'], 
            data['area_total_sistema_viario']
        )

        custo_rede_pluvial, fator_topo, fator_solo, fator_lancamento, total_pluvial = calcular_custo_rede_pluvial(
            data['area_total_sistema_viario'], data['testada_media'], data['qnt_lotes'], 
            data['total_eixos_vias'], data['topografia_predominante'], data['solo_predominante'], 
            data['local_lancamento_pluvial']
        )

        custo_agua, total_agua, fator_agua_solo = calcular_custo_agua(
            data['qnt_lotes'], data['testada_media'], data['solo_predominante']
        )

        total_eletrica, total_travessia, custo_rede_primaria, calculo_se_litoral_energia, custo_rede_secundaria, custo_subestacao, custo_luminaria, custo_tipo_empreendimento = calcular_custo_energia(
            data['total_eixos_vias'], data['qnt_lotes'], data['tipo_empreendimento'], 
            data['regiao_litoranea']
        )

        total_ebe = calcular_total_ebe(
            data['ebe'], data['qnt_lotes'], data['solo_predominante'], 
            data['nmr_estacoes_bombeamento_esgoto']
        )
        
        total_ete, habitantes_lote = calcular_total_ete(data['regiao_litoranea'], data['qnt_lotes'])
        
        total_cloacal, custo_obra_cloacal, fator_topo_cloacal, fator_solo_cloacal = calcular_total_cloacal(
            data['topografia_predominante'], data['solo_predominante'], data['testada_media'], 
            data['qnt_lotes'], total_ete, total_ebe
        )

        total_reservatorios = calcular_total_reservatorios(
            data['qnt_lotes'], habitantes_lote, data['valor_reservatorios'], 
            data['reservatorios']
        )
        
        total_paisagismo = calcular_total_paisagismo(
            data['padrao_empreendimento'], total_infra, data['custos_fixos_mensais']
        )

        # Assuming monthly expenses include marketing, brokerage, and general costs
        total_despesas_mensais = data['marketing_porcentagem'] + data['corretagem_porcentagem'] + terraplanagem_total + custo_rede_pluvial + custo_agua + total_eletrica + total_ebe + total_ete + total_cloacal + total_reservatorios + total_paisagismo

        total_incorporacoes = calcular_total_incorporacoes(
            data['aquisicao_terreno'], data['valor_aquisicao'], data['padrao_empreendimento'], 
            data['area_total_gleba'], data['perimetro_gleba'], data['area_da_edificacao'], 
            data['testada_media'], data['area_mata_a_ser_cortada'], data['solo_predominante'], 
            data['tipo_pavimentacao_vias'], data['tipo_empreendimento'], data['local_lancamento_pluvial']
        )
        
        total_sinalizacao = calcular_total_sinalizacao(
            data['tipo_pavimentacao_vias'], total_sinalizacao, data['area_total_sistema_viario']
        )

        total_infra = calcular_total_infra(
            terraplanagem_total, aterro_corte, terraplanagem_volume_corte, 
            terraplanagem_mata, terraplanagem_sistema_viario, custos_regiao_litoranea, 
            valor_predominante, terraplanagem_volume_aterro, custo_rede_pluvial, 
            fator_topo, fator_solo, fator_lancamento, total_pluvial, custo_agua, 
            total_agua, fator_agua_solo, total_eletrica, total_travessia, 
            custo_rede_primaria, calculo_se_litoral_energia, custo_rede_secundaria, 
            custo_subestacao, custo_luminaria, custo_tipo_empreendimento, 
            total_ebe, total_ete, total_cloacal, total_reservatorios, 
            total_paisagismo
        )

        total = calcular_total_tudo(
            total_incorporacoes, total_sinalizacao, total_infra, data['custos_por_mes'], 
            data['custos_por_lote'], total_despesas_mensais
        )

        return jsonify({
            'total': total,
            'total_incorporacoes': total_incorporacoes,
            'total_sinalizacao': total_sinalizacao,
            'total_infra': total_infra,
            'total_despesas_mensais': total_despesas_mensais
        })

    except Exception as e:
        return jsonify({'error': str(e), 'message': 'Please check the provided data.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
