# Cálculo de Incorporação Imobiliária

Este é um aplicativo Flask que realiza diversos cálculos relacionados à incorporação imobiliária, incluindo custos de aquisição, cronogramas de obra, custos de infraestrutura, entre outros. O aplicativo recebe dados via uma requisição POST em formato JSON, processa-os, e retorna um detalhamento dos custos e totais em formato JSON.

## Funcionalidades

O aplicativo realiza cálculos para os seguintes itens:
- **Custos de aquisição**: Inclui cálculos de permuta e aquisição de terreno.
- **Cronograma de obra**: Calcula prazos de terraplanagem, edificação e obra total.
- **Infraestrutura**: Custos de terraplanagem, rede pluvial, abastecimento de água, energia elétrica, estação de tratamento de esgoto, e mais.
- **Despesas mensais**: Considera despesas como marketing, corretagem e custos gerais.
- **Totais por categoria**: Incorporação, sinalização, infraestrutura, paisagismo, entre outros.

## Tecnologias Utilizadas

- **Flask**: Framework web utilizado para criar a API.
- **Python**: Linguagem de programação principal.
- **calcular_incorporacao_imobiliaria**: Módulos personalizados para cálculos detalhados de incorporação.

## Como Usar

### Pré-requisitos

- **Python 3.7+**
- Instalar as dependências listadas no `requirements.txt`:
    ```
    pip install -r requirements.txt
    ```

### Executando o App

1. Clone o repositório:
    ```
    git clone https://github.com/digitalrobertlima/calcular_incorporacao_imobiliaria.git
    ```

2. Navegue até o diretório do projeto:
    ```
    cd calcular_incorporacao_imobiliaria
    ```

3. Inicie o servidor Flask:
    ```
    python app.py
    ```

4. O servidor estará disponível em `http://127.0.0.1:5000`.

### Endpoints

#### `POST /calcular`

Envie um JSON com os dados do projeto de incorporação. O formato esperado inclui informações sobre o VGV, permuta, área total, número de lotes, etc.

**Exemplo de Requisição:**
```
{
  "vgv": 1000000,
  "permuta_vgv": 10,
  "aquisicao_terreno": 1,
  "valor_aquisicao": 500000,
  "area_da_edificacao": 3000,
  "area_total_gleba": 5000,
  "topografia_predominante": "plana",
  "volume_aterro": 1000,
  "volume_corte": 500,
  "qnt_lotes": 20,
  "regiao_litoranea": true
}
```

**Exemplo de Resposta:**
```
{
  "total": 1500000,
  "total_incorporacoes": 500000,
  "total_sinalizacao": 30000,
  "total_infra": 700000,
  "total_despesas_mensais": 10000
}
```

### Tratamento de Erros

Se os dados fornecidos estiverem incorretos ou faltarem informações, o endpoint retornará uma mensagem de erro com o código 400.

**Exemplo de Resposta de Erro:**
```
{
  "error": "KeyError",
  "message": "Please check the provided data."
}
```

## Contribuindo

Contribuições são bem-vindas! Siga as instruções abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Envie a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
