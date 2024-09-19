# constants.py

# Prazo Total da Obra
PAZOS_INFRA = {
    15000: 8,
    20000: 10,
    30000: 12,
    40000: 15,
    50000: 18,
    60000: 21,
    75000: 24,
    80000: 26,
    90000: 28
}
PAZOS_INFRA_MAX = 5000
PAZOS_EDIFICACAO = {
    1500: 6,
    3000: 9
}
PAZOS_EDIFICACAO_DEFAULT = 12
PAZOS_TOTAL_MIN = 16

# Canteiro de Obras
REGIAO_SE_LITORANEA = 40000
CANTEIRO_CUSTO_FIXO = 140000
CANTEIRO_CUSTOS_MENSAL = 4800
CUSTOS_FIXOS_MENSAL = 8500.00
CUSTOS_POR_MES = 91700.00
CUSTOS_POR_LOTE = 50.00

# Cálculo de Topografia
CUSTO_DESMATAMENTO = 8.50
CUSTO_DECAPAGEM = 20
CUSTO_ESCAVACAO = 14.50
CUSTO_ATERRO = 12.50
ATERRO_MAIOR_CORTE = 70
SE_REGIAO_LITORANEA = 5
APOIO_CONSIDERADO = 73.33
APOIO_MOBILIZACOES = 7.33
UNIT_MOBILIZACOES = 900.00
UNIT_PROCTOR_MODIFICADO = 90.00
UNIT_CBR_MODIFICADO = 110.00
UNIT_GRANULOMETRIA = 75.00
UNIT_ENSAIOS_FIS = 55.00
UNIT_EQ_AREIA = 110.00
UNIT_DENSIDADE = 95.00

# constants.py

########## PLUVIAL ##########

# Fatores para Topografia
FACTOR_TOPO_PLUV = {
    0: 0.1,  # Topografia Predominante: Plana
    1: '-',   # Topografia Predominante: Desnivelada
    2: 1.0    # Topografia Predominante: Acidentada
}

# Fatores para Tipo de Solo
FACTOR_SOLO = {
    0: (0.05, 'Arenoso'),         # Solo Predominante: Arenoso
    1: (0.0, 'Argiloso'),         # Solo Predominante: Argiloso
    2: (0.10, 'Decomposição de Rocha')  # Solo Predominante: Decomposição de Rocha
}

# Fatores para Local de Lançamento Pluvial
FACTOR_LANCAMENTO = {
    0: (0, 'Local'),         # Local de Lançamento: Local
    1: (0.025, 'Próximo'),   # Local de Lançamento: Próximo
    2: (0.10, 'Distante')    # Local de Lançamento: Distante
}

########## ÁGUA ##########

# Fatores para Solo Predominante na Água
FACTOR_SOLO_AGUA = {
    1: 0,   # Solo Predominante: Argiloso
    2: 0,   # Solo Predominante: Decomposição de Rocha
    0: 0.20 # Solo Predominante: Arenoso
}

# Custos fixos para cálculo de Água
CUSTO_BASE_AGUA = 270
CUSTO_TESTADA_AGUA = 120

# constants.py

########## ENERGIA ##########

# Custos Fixos para Cálculo de Energia
REDE_PRIMARIA = 240000
REDE_SECUNDARIA = 120000
SUBESTACAO = 40000
LUMINARIA_SODIO = 1500

# Custos Fixos para Tipo de Empreendimento
CUSTO_TIPO_EMPREENDIMENTO = {
    0: 0.00,          # Loteamento
    1: 140000.00      # Condomínio
}

# Fator para Região Litorânea
FACTOR_LITORANEA = 0.2

# Custo por Lotação para Empreendimento
CUSTO_TRAVESSIA = 1400

########## EBE / ETE / CLOACAL ##########

# Custos para EBE
CUSTO_LOTE_BASE = 200000
VALOR_LOTES_EXCEDENTES = 1000
VALOR_LOTES_EXCEDENTES_ADICIONAIS = 150

# Acréscimos para Solo em EBE
ACRESCIMO_SOLO = {
    1: 0.10,          # Argiloso
    2: 0.00,          # Decomposição de Rocha
    0: 0.10           # Arenoso
}

# Custos para ETE
CUSTOS_ETE = [
    460000, 650000, 840000, 980000, 1200000, 1260000, 1510000, 1610000, 1820000,
    1960000, 2140000, 2260000, 2420000, 2580000, 2830000, 2880000, 3130000, 3270000,
    3450000, 3610000, 3810000, 4040000, 4080000
]

# Custos para Cloacal
CUSTO_OBRA_CLOACAL = 300
VALOR_ADICIONAL_CLOACAL = 1000

# Acréscimos para Topografia e Solo em Cloacal
CUSTO_TOPO_CLOACAL = {
    1: 0.02,          # Topografia Desnivelada
    2: 0.00,          # Topografia Acidentada
    0: 0.05           # Topografia Plana
}

CUSTO_SOLO_CLOACAL = {
    1: 0.00,          # Argiloso
    2: 0.00,          # Decomposição de Rocha
    0: 0.20           # Arenoso
}

# RESERVATÓRIOS
CONSTANTE_VOLUME = 0.08
MULTIPLICADOR_VOLUME_1 = 10000
MULTIPLICADOR_VOLUME_2 = 6250
MULTIPLICADOR_VOLUME_3 = 6000
MULTIPLICADOR_VOLUME_4 = 5500
MULTIPLICADOR_VOLUME_5 = 5000

# MUROS
VALOR_MURO = 650
VALOR_MURO_REDUZIDO = 150

# ENERGIA
REDE_PRIMARIA = 240000
REDE_SECUNDARIA = 120000
SUBESTACAO = 40000
LUMINARIA_SODIO = 1500

# CUSTOS TIPO EMPREENDIMENTO
CUSTO_TIPO_EMPREENDIMENTO_0 = 0.00
CUSTO_TIPO_EMPREENDIMENTO_1 = 140000.00

# REGIAO LITORANEA
CALCULO_SE_LITORAL_ENERGIA = 0.2

# EBE
VALOR_LOTES_EXCEDENTES_150 = 200000
VALOR_LOTES_EXCEDENTES_400 = 1000
VALOR_LOTES_EXCEDENTES_ACIMA_400 = 150

# ETE
HABITANTES_LOTE_LITORANEA = 8
HABITANTES_LOTE_NAO_LITORANEA = 5
VALORES_ETE = {
    (2, 460000),
    (3, 650000),
    (4, 840000),
    (5, 980000),
    (6, 1200000),
    (7, 1260000),
    (8, 1510000),
    (9, 1610000),
    (10, 1820000),
    (11, 1960000),
    (12, 2140000),
    (13, 2260000),
    (14, 2420000),
    (15, 2580000),
    (16, 2830000),
    (17, 2880000),
    (18, 3130000),
    (19, 3270000),
    (20, 3450000),
    (21, 3610000),
    (22, 3810000),
    (23, 4040000),
    (float('inf'), 4080000),
}

# CLOACAL
CUSTO_TOPO_CLOACAL_1 = 0.02
CUSTO_TOPO_CLOACAL_2 = 0
CUSTO_TOPO_CLOACAL_DEFAULT = 0.05
CUSTO_SOLO_CLOACAL_1 = 0
CUSTO_SOLO_CLOACAL_2 = 0
CUSTO_SOLO_CLOACAL_DEFAULT = 0.20
CUSTO_OBRA_CLOACAL = 300

# Constants for financial calculations

# Percentages
PROJ_LICENC_PERCENTAGE = 0.02  # Percentage of VGV bruto
ASSESSORIA_CONSULT_UNIT = 10000  # Cost per prazo_total_obra
ASSISTENCIA_TEC_PERCENTAGE = 0.015  # Percentage of total_infra
IMPOSTOS_VGV_EMP0 = 0.0692  # Percentage for tipo_empreendimento == 0
IMPOSTOS_VGV_EMP1 = 0.04  # Percentage for tipo_empreendimento != 0

# Fixed costs
REGISTRO_TABELIONATO_UNIT = 400  # Cost per lote

PAISA_TIPO_EMP1_NO_ARQUITETURAS = 0.04  # Percentage for tipo_empreendimento == 1, no arquiteturas
PAISA_TIPO_EMP1_COM_ARQUITETURAS = 0.03  # Percentage for tipo_empreendimento == 1, with arquiteturas
PAISA_TIPO_EMP0_NO_ARQUITETURAS = 0.006  # Percentage for tipo_empreendimento != 1, no arquiteturas
PAISA_TIPO_EMP0_COM_ARQUITETURAS = 0.005  # Percentage for tipo_empreendimento != 1, with arquiteturas
CUSTO_SINALIZACAO = 40  # Cost per total_eixos_vias
MULTIPLICADOR_PADAO_2 = 1.3  # Multiplier for padrao_empreendimento == 2
MULTIPLICADOR_PADAO_1 = 1.15  # Multiplier for padrao_empreendimento == 1