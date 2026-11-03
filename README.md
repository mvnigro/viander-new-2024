# Viander Brasil

Site institucional e catálogo de tomates italianos Viander para cozinhas profissionais. HTML, CSS e JavaScript nativos, sem instalação ou build para publicar.

## Executar localmente

```sh
python3 -m http.server 8765
```

Abra `http://localhost:8765`.

## Páginas

- `index.html`: apresentação, produtos, segmentos, empresa, dúvidas e orçamento.
- `polpa-fina.html` e `tomate-pelati.html`: apresentação, informações e aplicações de cada produto.
- `guia-tomates-italianos.html`: comparação dos formatos e orientação de escolha.
- `privacidade.html`: explicação do fluxo de dados.
- `404.html`: página de recuperação.

## Atendimento e conversão

WhatsApp comercial: **+55 11 99936-5401**, preservado do link de atendimento da versão anterior. O telefone exibido anteriormente divergia desse link; a nova versão usa o mesmo número em todos os pontos de contato.

O formulário não usa servidor, CRM ou armazenamento no navegador. Ele monta a mensagem em um campo oculto e abre o WhatsApp; o visitante decide enviar. Os links das páginas de produto pré-selecionam o item no formulário. Não existe promessa de resposta em prazo específico, estoque, preço ou pedido mínimo.

Não foram adicionados rastreadores de publicidade ou analytics. A melhoria de conversão é uma hipótese de projeto; os resultados precisam ser medidos após a publicação. Caso seja instalada medição, revisar a página de privacidade conforme a configuração real.

## Conteúdo e SEO/GEO

- Conteúdo principal entregue no HTML, inclusive sem JavaScript.
- Títulos, descrições, canonical, Open Graph e cartão de compartilhamento.
- JSON-LD: Organization, WebSite, WebPage, Product, BreadcrumbList, Article e FAQPage, conforme a página.
- Sem avaliações, preços, certificações ou números de clientes inventados.
- Sitemap com URLs canônicas únicas e robots.txt sem regras duplicadas.
- `vercel.json`: redireciona `/index.html` para `/` e configura cabeçalhos básicos.
- URLs dos dois produtos mantidas. O domínio canônico preservado é `https://www.viander.com.br/`.

A estratégia para buscadores e respostas de IA se apoia em conteúdo útil, informações claras da empresa, comparação direta e dados estruturados consistentes. Não garante ranking, indexação, rich results ou citação por assistentes. Referência: [guia oficial do Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

Os fatos dos produtos e os contatos foram extraídos do site anterior. Não foram mantidas as alegações anteriores de “20+ anos”, “milhares de clientes”, certificações não identificadas, rendimento absoluto ou economia percentual sem documentação. Antes da publicação, o responsável comercial deve conferir os rótulos, os pesos, a descrição da polpa, os dados da distribuidora e as condições reais de atendimento.

## Publicação

A pasta raiz é o site pronto para um host estático. O `package.json` fixa Node.js 26.x para o ambiente de publicação da Vercel, substituindo a configuração antiga de Node.js 20, que foi descontinuada. Não há dependências ou etapa de build do site. Na Vercel, use o preset **Other**, sem comando de build, e publique a raiz. Preserve a configuração existente do domínio. Branches de revisão devem gerar prévias; a branch de produção é `master`.

Depois de publicar, confirme o redirecionamento canônico, o retorno HTTP 404 para endereços inexistentes, envie o sitemap no Search Console e valide os dados estruturados no Rich Results Test. Os produtos não têm `offers`, preço ou avaliações; os dados descrevem o catálogo e não representam uma loja com compra online ou garantia de resultado enriquecido.

## Validação realizada

Revisão no Chrome em desktop e telas de 390 e 320 px. Navegação móvel, menu, FAQ, links de produto, pré-seleção dos dois itens e abertura da mensagem de WhatsApp com dados fictícios. Checagens estáticas de H1, metadados, JSON-LD, sitemap XML, imagens, IDs, links e âncoras. Nenhuma mensagem foi enviada no teste.

Veja `ASSETS.md` para a origem da imagem gerada.

## Refinamento visual

A abertura agora destaca as duas embalagens restauradas a partir das imagens existentes. A página inicial ganhou comparação visual das texturas, com indicação de imagem ilustrativa. Os textos de apoio e a navegação foram ampliados. No celular, a barra fixa de orçamento preserva o produto escolhido e se recolhe na área de contato. O espaço da barra é reservado para não cobrir o rodapé. As fotos originais seguem no repositório; os arquivos derivados e prompts estão documentados em IMAGENS-REFINAMENTO.md.
