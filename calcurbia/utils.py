def process_request_data(request_data):
    keys = [
        'vgv_m2', 'permuta_vgv', 'aquisicao_terreno', 'valor_aquisicao', 
        'padrao_empreendimento', 'area_total_gleba', 'perimetro_gleba', 
        'area_da_edificacao', 'testada_media', 'area_mata_a_ser_cortada', 
        'solo_predominante', 'tipo_pavimentacao_vias', 'tipo_empreendimento', 
        'local_lancamento_pluvial', 'total_eixos_vias', 'qnt_lotes', 
        'area_total_leito_carrocavel', 'area_total_sistema_viario', 
        'area_total_passeio_revestido', 'area_total_passeio_grama', 
        'soma_total_meio_fios', 'volume_corte', 'volume_aterro', 
        'areas_privativas_lotes', 'nmr_estacoes_bombeamento_esgoto', 
        'arquiteturas', 'reservatorios', 'ebe', 'perimetro_app', 
        'regiao_gleba', 'marketing', 'corretagem', 'custos_fixos_mensais', 
        'custos_por_mes', 'custos_por_lote'
    ]
    
    data = {key: float(request_data.get(key, 0)) for key in keys}
    
    # Calcula 'vgv' a partir de 'vgv_m2' e 'area_total_gleba'
    data['vgv'] = data['vgv_m2'] * data['area_total_gleba']

    # Define valores padrão para campos opcionais
    data['marketing_porcentagem'] = data['vgv'] * (data.get('marketing', 0) / 100)
    data['corretagem_porcentagem'] = data['vgv'] * (data.get('corretagem', 5) / 100)
    
    return data
