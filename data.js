// data.js - Banco de Dados do Interpreta +
const appData = {
    secoes: [
        {
            id: "s1",
            titulo: "Caminho Visual (Nível 1)",
            descricao: "Interpretação crítica, análise não verbal e compreensão sociopolítica de tirinhas e charges.",
            imagemCover: "https://universoretro.com.br/wp-content/uploads/2019/09/garfield.jpg",
            quizzes: [
                {
                    id: "q1_s1",
                    titulo: "Módulo 1: Leitura Básica e Ação Não Verbal",
                    conteudoMedia: "https://media.brainly.com.br/image/rs:fill/w:1200/q:75/plain/https://pt-static.z-dn.net/files/d76/5167c7e48c0e06007f2a6238c9ff8486.jpg",
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "Nesta tirinha, o humor se constrói principalmente através de qual recurso?", 
                            opcoes: ["De um trocadilho complexo com a palavra 'música'.", "Da ação física inesperada que quebra a expectativa da fala inicial.", "Da ausência completa de texto no primeiro quadrinho.", "Da amizade demonstrada pelo abraço entre os personagens."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "A palavra 'SMACK!' no segundo quadrinho é classificada como uma onomatopeia. Qual é a sua função visual e textual na narrativa?", 
                            opcoes: ["Indicar que o personagem está pensando em voz alta.", "Representar graficamente o som do tapa desferido pelo gato.", "Sinalizar o título da música que seria cantada.", "Demonstrar o silêncio absoluto no ambiente."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "A justificativa do gato no último quadrinho (balão de pensamento) revela que ele agiu de tal forma porque:", 
                            opcoes: ["Odeia qualquer tipo de som ou barulho em casa.", "Queria chamar a atenção para si mesmo.", "Considera a voz de seu dono tão ruim que agiu preventivamente para 'proteger' a música.", "Estava sendo atacado e agiu em legítima defesa."], 
                            respostaCorreta: 2 
                        }
                    ]
                },
                {
                    id: "q2_s1",
                    titulo: "Módulo 2: Dedução e Quebra de Expectativa",
                    conteudoMedia: "https://dauo5zdfqzq1q.cloudfront.net/images/concursos/7c8f4da26743f39e28e9e853a90e3265.png", // Imagem do Calvin (Fóssil e Cabide)
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "Nos dois primeiros quadrinhos, a atitude dos personagens diante do objeto encontrado no chão demonstra uma tentativa de:", 
                            opcoes: ["Ignorar o problema e continuar caminhando.", "Brigar para ver quem fica com o objeto.", "Vender o objeto para um museu de arqueologia.", "Investigar e deduzir a origem histórica de algo que parecia antigo."], 
                            respostaCorreta: 3 
                        },
                        { 
                            pergunta: "A quebra de expectativa, que gera o humor da cena, ocorre exatamente quando:", 
                            opcoes: ["Eles descobrem que o objeto é, na verdade, um dinossauro vivo.", "O tigre percebe que não é um osso, mas um simples cabide de roupas.", "Eles decidem enterrar o objeto novamente.", "O balão de fala do último quadrinho fica vazio."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "A frase final do tigre ('Isso explica porque as suas roupas vivem pelo chão') atua como:", 
                            opcoes: ["Um elogio à capacidade de organização do menino.", "Uma teoria científica comprovada sobre os homens das cavernas.", "Uma crítica irônica à desorganização e aos maus hábitos do menino.", "Um apelo religioso para a preservação de artefatos."], 
                            respostaCorreta: 2 
                        }
                    ]
                },
                {
                    id: "q3_s1",
                    titulo: "Módulo 3: Ironia e Falso Moralismo",
                    conteudoMedia: "https://media.brainly.com.br/image/rs:fill/w:1920/q:75/plain/https://pt-static.z-dn.net/files/d71/de4781288e3061c48d0ed20954ebc9ac.jpg", // Imagem do Calvin (Votação e Bolo)
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "A postura indignada do personagem nos dois primeiros quadrinhos sugere, inicialmente, que ele está preocupado com:", 
                            opcoes: ["O exercício da cidadania e a participação democrática.", "A falta de doces na sua casa.", "A ausência de notícias no jornal.", "A poluição sonora na cidade."], 
                            respostaCorreta: 0 
                        },
                        { 
                            pergunta: "A pergunta do tigre ('Você está preocupado com os rumos do nosso país?') tem o objetivo principal de:", 
                            opcoes: ["Mudar de assunto rapidamente.", "Incentivar o menino a se candidatar a um cargo político.", "Testar e questionar a verdadeira motivação por trás do forte discurso do menino.", "Concordar de forma absoluta com a indignação apresentada."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "A resposta final ('Não, só queria um pedaço maior do bolo') subverte a narrativa porque revela que as intenções do personagem eram, na verdade:", 
                            opcoes: ["Estritamente egoístas e pautadas em benefício próprio, esvaziando seu discurso moral.", "Altruístas, pois ele queria dividir o bolo com o país.", "Econômicas, focadas em aumentar a produção nacional de alimentos.", "Acidentais, resultantes de um mal-entendido com a palavra 'governo'."], 
                            respostaCorreta: 0 
                        }
                    ]
                },
                {
                    id: "q4_s1",
                    titulo: "Módulo 4: Legislação vs. Realidade",
                    conteudoMedia: "https://arquivos.infra-questoes.grancursosonline.com.br/imagem/prova/122805/questao/4173945-20251113155810000000-0.png", // Imagem do Acordo Ortográfico
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "A charge estabelece um forte contraste crítico entre dois elementos da sociedade. Quais são eles?", 
                            opcoes: ["A divergência entre esquerda e direita.", "O valor dos jornais impressos e a popularização da internet.", "A diferença de idade e de vestimenta entre os dois personagens.", "A aprovação de medidas burocráticas (o acordo) e a realidade deficitária da educação básica do povo."], 
                            respostaCorreta: 3 
                        },
                        { 
                            pergunta: "A fala final ('...Agora só falta ensinar ao povo escrever!') carrega um tom de:", 
                            opcoes: ["Otimismo cego e esperança na política atual.", "Sarcasmo e ironia, denunciando que a lei não resolve a falta de alfabetização e letramento.", "Desconhecimento, mostrando que o personagem não sabe ler.", "Apoio incondicional às decisões do presidente."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "No contexto sociopolítico, a principal mensagem desta imagem é alertar que:", 
                            opcoes: ["Regras ortográficas são inúteis e devem ser abolidas.", "O presidente é o único responsável por dar aulas nas escolas.", "Reformas oficiais superficiais não substituem a necessidade de políticas estruturais de educação.", "O povo brasileiro não se interessa por mudanças linguísticas."], 
                            respostaCorreta: 2 
                        }
                    ]
                },
                {
                    id: "q5_s1",
                    titulo: "Módulo 5: Polissemia e Relações de Trabalho",
                    conteudoMedia: "https://qcon-assets-production.s3.amazonaws.com/images/provas/141175/Q18.png", // Imagem da Mafalda (Indicador de desemprego)
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "O principal recurso linguístico utilizado para gerar o humor e a crítica nesta tirinha é a polissemia (ambiguidade). Ela ocorre com qual termo?", 
                            opcoes: ["A palavra 'patrão'.", "A palavra 'operários'.", "A palavra/expressão 'indicador'.", "A onomatopeia 'AAAAAH!'."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "Nos dois primeiros quadrinhos, a personagem se refere ao 'indicador' de um patrão como um símbolo de:", 
                            opcoes: ["Poder e autoridade unilateral para demitir funcionários..", "Poder e autoridade unilateral para explorar funcionários.", "Apontamento de direções nas fábricas modernas.", "Orientação de trânsito para os operários."], 
                            respostaCorreta: 0 
                        },
                        { 
                            pergunta: "No último quadrinho, a personagem conclui de forma literal que seu próprio dedo é o 'indicador de desemprego'. Em economia, o que significa o sentido figurado dessa expressão que ela não compreendeu?", 
                            opcoes: ["Uma máquina moderna de bater ponto.", "As cordenadas quantitativas de pessoas sem trabalho no país do amor.", "O nome do sindicato dos trabalhadores das fábricas.", "A taxa, índice ou dado estatístico que mede a quantidade de pessoas sem trabalho no país."], 
                            respostaCorreta: 3 
                        }
                    ]
                },
                {
                    id: "q6_s1",
                    titulo: "Módulo 6: Precariedade e Sucateamento",
                    conteudoMedia: "https://divinews.com/wp-content/uploads/2018/11/19-11-18-Charge-de-Ricardo-Welbert-sobre-o-fim-dos-m%C3%A9dicos-cubanos-no-Brasil-no-governo-Bolsonaro.jpg", // Imagem do PSF (Mesa do Cubano)
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "Para compreender totalmente a carga crítica desta charge, o leitor precisa acionar seu conhecimento de mundo (intertextualidade) sobre:", 
                            opcoes: ["A saída de médicos estrangeiros (cubanos) de programas sociais de saúde pública por questões ideológicas em 2018.", "A saída de médicos estrangeiros (chineses) das mesas de jogos dos postinhos.", "As reformas arquitetônicas feitas recentemente nos postos de saúde.", "O aumento do número de mesas vazias para jogos de cartas nos postinhos de saúde pública no Brasil."], 
                            respostaCorreta: 0
                        },
                        { 
                            pergunta: "A sugestão absurda feita pela profissional ('usar a mesa para uma partida de truco') funciona como uma denúncia contundente de:", 
                            opcoes: ["Como o governo incentiva o lazer em família nos finais de semana.", "Como os móveis antigos são bem reaproveitados.", "Sucateamento, ineficácia e ausência de profissionais básicos em serviços essenciais do Estado.", "Como os pacientes não respeitam as regras do ambiente hospitalar."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "A expressão facial e corporal da família retratada transmite um sentimento generalizado de:", 
                            opcoes: ["Excitação e alegria pela oportunidade de jogar cartas.", "Tranquilidade e paciência absoluta.", "Desamparo, frustração e choque diante do descaso com suas necessidades vitais.", "Raiva violenta, prestes a destruir o local."], 
                            respostaCorreta: 2 
                        }
                    ]
                },
                {
                    id: "q7_s1",
                    titulo: "Módulo 7: Entrelinhas e Violência Estrutural",
                    conteudoMedia: "https://s2.glbimg.com/aF-Mbd5K_hDKzUIXvh8YDItX30k=/top/e.glbimg.com/og/ed/f/original/2018/11/27/dinho2923.png", // Imagem do Armandinho (Correr/Polícia)
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "O motivo que impede o personagem negro de aceitar o convite para a brincadeira é revelado visualmente de forma indireta no último quadrinho. Qual é esse elemento?", 
                            opcoes: ["A mochila pesada que ele carrega nas costas.", "O cansaço físico extremo demonstrado pelo seu suor.", "A presença imponente das pernas de um policial fardado ao seu lado.", "A falta de tênis adequados para corrida."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "Ao afirmar 'Pra mim, não é seguro!', a narrativa abandona a inocência infantil para escancarar uma ferida estrutural da sociedade. Qual é essa crítica?", 
                            opcoes: ["A falta de calçadas niveladas para crianças brincarem na rua.", "O racismo estrutural, onde uma criança negra correndo é frequentemente e injustamente vista como suspeita pelas autoridades.", "O aumento dos assaltos a crianças em praças públicas.", "O excesso de carros em alta velocidade nas vias urbanas."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "Neste tipo de quadrinho, o leitor é obrigado a 'ler nas entrelinhas' porque:", 
                            opcoes: ["O texto apresenta palavras difíceis e em outro idioma.", "A mensagem principal não importa por ser mimimi.", "A força da crítica reside justamente no contraste entre o que é dito (o não dito explícito) e a dura realidade visual do cenário.", "A mensagem principal é ocultada para evitar punições legais.."], 
                            respostaCorreta: 3 
                        }
                    ]
                },
                {
                    id: "q8_s1",
                    titulo: "Módulo 8: Tecnologia, Algoritmos e Responsabilidade",
                    conteudoMedia: "https://www.clubedoportugues.com.br/wp-content/uploads/2025/06/ARfuKzmUZ76O9sgk-1.png", // Imagem das Redes Sociais e Invasões
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "A personificação (dar características humanas a objetos) nesta charge é utilizada nos logotipos de quais empresas?", 
                            opcoes: ["Emissoras de televisão abertas e fechadas.", "Bancos estatais e instituições financeiras privadas.", "Plataformas de comunicação e redes sociais (Telegram, WhatsApp e Twitter/X).", "Partidos políticos brasileiros de diferentes espectros."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "O jogo de palavras no balão amarelo ('De maneira alguma, somos totalmente irresponsáveis!') serve para criticar duramente a atitude das grandes empresas de tecnologia (Big Techs). Qual é essa atitude?", 
                            opcoes: ["A recusa sistemática em assumir qualquer responsabilidade legal, moral ou algorítmica sobre a disseminação de crimes ou fake news em suas plataformas.", "O fato de entregarem as mensagens com lentidão para os usuários.", "A cobrança de taxas ocultas para baixar os aplicativos.", "A política de criar perfis falsos para interagir com os humanos."], 
                            respostaCorreta: 0 
                        },
                        { 
                            pergunta: "Sob a ótica da Soberania Digital, a charge alerta a sociedade para o grave risco de:", 
                            opcoes: ["Não ter sinal de internet em áreas rurais isoladas.", "Permitir que monopólios tecnológicos estrangeiros operem no país sem regulação rígida, influenciando eventos políticos com impunidade.", "Pessoas passarem tempo demais olhando para telas em vez de livros.", "Os logotipos dos aplicativos serem alterados sem aviso prévio."], 
                            respostaCorreta: 1 
                        }
                    ]
                },
                {
                    id: "q9_s1",
                    titulo: "Módulo 9: Hipérbole e Falência Institucional",
                    conteudoMedia: "https://www.grupoescolar.com/galeria/fotos/4A800EC9D.jpg", // Imagem Saúde Pública (Esqueleto e Morte)
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "A charge utiliza de forma central a figura de linguagem 'hipérbole' (exagero) para representar visualmente qual aspecto do problema na Saúde Pública?", 
                            opcoes: ["O tamanho excessivo dos jalecos dos médicos.", "O exagero sobre a saúde, ilustrado pelo paciente que se tornou a morte.", "A enorme quantidade de sorrisos na recepção do hospital.", "O tempo de espera brutal, ilustrado pelo paciente que se tornou um esqueleto.."], 
                            respostaCorreta: 3 
                        },
                        { 
                            pergunta: "Na composição da cena, a fala do médico ('O salário é baixo!') aliada ao estado dos pacientes evidencia que:", 
                            opcoes: ["A culpa pela crise na saúde é exclusivamente dos pacientes que reclamam.", "O sistema atende perfeitamente bem, mas os profissionais são gananciosos.", "O colapso do Estado afeta e precariza tanto a vida do cidadão que busca socorro quanto a do trabalhador que presta o serviço.", "Os esqueletos não precisam mais de atendimento médico."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "A figura da Morte dizendo 'Eu acho ótimo!' constitui o clímax da denúncia, pois escancara, de forma ácida, que:", 
                            opcoes: ["Os profissionais de saúde pública são simpáticos com todos os públicos.", "A negligência do Estado em infraestrutura e serviços essenciais é diretamente letal para a população mais vulnerável.", "A morte é uma figura burocrática que ajuda na organização do hospital.", "O envelhecimento natural é o único motivo para mortes em hospitais."], 
                            respostaCorreta: 1 
                        }
                    ]
                },
                {
                    id: "q10_s1",
                    titulo: "Módulo 10: Intertextualidade, Hubris e Sátira (Desafio)",
                    conteudoMedia: "https://pbs.twimg.com/media/HGBSjA5XgAAT5B9.jpg", // Imagem Trump e Deus (Michelangelo)
                    tipo: "imagem",
                    perguntas: [
                        { 
                            pergunta: "Esta charge constrói uma sátira avançada por meio da 'paródia visual' de qual famosa obra de arte histórica?", 
                            opcoes: ["Monalisa, de Leonardo da Vinci.", "A Aparição (L'Apparition, 1876), de  Gustave Moreau.", "A Criação de Adão, de Michelangelo.", "Abaporu, de Tarsila do Amaral."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "A fala de Donald Trump no canto esquerdo ('God loves me! I'm Jesus!') reflete uma atitude de extremo 'Hubris' (arrogância desmedida). No contexto sociopolítico, o chargista está criticando:", 
                            opcoes: ["A instrumentalização megalomaníaca e perigosa da religião, onde políticos se autopromovem como figuras messiânicas e divinas.", "A vulnerabilidade de certos grupos conservadores a narrativas espetacularizadas, que substituem o debate prático de propostas políticas por um fervor sectário e inquestionável.", "O apelo sedutor de discursos absolutistas que oferecem falsas soluções simplistas para dilemas complexos, servindo essencialmente para validar as crenças e vieses pré-existentes de seus apoiadores.", "O excelente trabalho de marketing feito durante campanhas eleitorais."], 
                            respostaCorreta: 0 
                        },
                        { 
                            pergunta: "O contraste entre a arrogância do político e a reação colérica de Deus ('Eu vou jogar um raio nesse...'), contido pelos anjos, sugere ironicamente que:", 
                            opcoes: ["A indignação celestial reflete, na verdade, a frustração com uma base religiosa que sofre de amnésia teológica, abandonando seus princípios morais inegociáveis sempre que um líder lhes promete poder terreno.", "O episódio demonstra que a tolerância divina se esgota com seguidores que ignoram as contradições éticas de seus ídolos, justificando qualquer narcisismo como se fosse uma missão espiritual.", "Até mesmo o sagrado perde a paciência diante da usurpação oportunista, da hipocrisia e do complexo de messias na geopolítica moderna.", "A contenção feita pelos anjos serve para dar mais tempo a fim de que os fiéis percebam a dissonância cognitiva de aplaudir atitudes egocêntricas e cruéis que contrariam frontalmente o livro sagrado que dizem seguir."], 
                            respostaCorreta: 2 
                        }
                    ]
                }
            ]
        },
        {
            id: "s2",
            titulo: "Leitura Crítica (Nível 2)",
            descricao: "Textos sobre desenvolvimento, infraestrutura e realidade socioeconômica.",
            imagemCover: "https://i.kym-cdn.com/entries/icons/original/000/051/865/vegeta-reading-meme.jpg",
            quizzes: [
                {
                    id: "q1_s2",
                    titulo: "Módulo 1: O Projeto Interrompido",
                    tipo: "texto",
                    conteudoTexto: "Historicamente, nosso país possui um potencial imenso, rico em recursos e capital humano. No entanto, o foco excessivo na exportação de matéria-prima bruta nos mantém dependentes. Na era da informação, a verdadeira independência exige que desenvolvamos nossa própria infraestrutura tecnológica. Um projeto de nação para o Século XXI demanda que cidades do interior não sejam apenas consumidoras de tecnologia estrangeira, mas centros de inteligência e produção digital.",
                    perguntas: [
                        { 
                            pergunta: "Segundo o texto, o que mantém o país em posição de dependência?", 
                            opcoes: ["A falta de terras férteis.", "O foco exclusivo na exportação de matéria-prima em vez de tecnologia.", "A ausência de jovens no mercado.", "O excesso de feriados nacionais."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "O que o autor defende como 'verdadeira independência' na era atual?", 
                            opcoes: ["O isolamento cultural.", "A importação de mais computadores.", "O desenvolvimento de uma infraestrutura e soberania tecnológica nacional.", "O retorno exclusivo à agricultura de subsistência."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "Qual deve ser o novo papel das cidades do interior nesse contexto?", 
                            opcoes: ["Serem apenas consumidoras de plataformas globais.", "Exportarem apenas grãos e minérios.", "Tornarem-se polos de inteligência, inovação e produção digital.", "Afastarem-se do uso da internet."], 
                            respostaCorreta: 2 
                        }
                    ]
                },
                {
                    id: "q2_s2",
                    titulo: "Módulo 2: O Novo Ouro",
                    tipo: "texto",
                    conteudoTexto: "Em Redenção, o comércio local adota plataformas estrangeiras de delivery e gestão. Cada venda gera dados: o que o cidadão consome, seus horários e capacidade de pagamento. Essa inteligência é processada no exterior para otimizar lucros de corporações, enquanto o vendedor local arca com taxas altíssimas. A tecnologia, quando não é soberana, deixa de ser uma ponte para o desenvolvimento e se torna um pedágio econômico.",
                    perguntas: [
                        { 
                            pergunta: "Qual é o recurso mais valioso extraído dos comércios locais, segundo o texto?", 
                            opcoes: ["O lucro bruto.", "As mercadorias físicas.", "Os dados comportamentais e a inteligência de mercado.", "A frota de motos dos entregadores."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "O que a metáfora 'deixa de ser ponte e se torna pedágio' significa?", 
                            opcoes: ["A plataforma não cobra nada do usuário.", "As plataformas cobram pedágios reais nas rodovias.", "Em vez de apenas conectar partes, a plataforma explora e extrai valor desproporcional da economia local.", "A internet na cidade é muito lenta."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "Qual seria uma ação para reverter esse 'pedágio'?", 
                            opcoes: ["Proibir o comércio de vender online.", "Criar cooperativas de tecnologia locais onde os dados e lucros fiquem na comunidade.", "Aumentar os preços para o consumidor final.", "Usar apenas dinheiro em espécie."], 
                            respostaCorreta: 1 
                        }
                    ]
                },
                {
                    id: "q3_s2",
                    titulo: "Módulo 3: Êxodo de Talentos",
                    tipo: "texto",
                    conteudoTexto: "Muitos jovens talentosos de áreas como Engenharia de Software acabam saindo de suas regiões para trabalhar em big techs globais. Esse êxodo de cérebros enfraquece a capacidade local de inovação. A justiça social no ambiente digital passa por criar oportunidades estratégicas dentro do nosso território, retendo essas mentes brilhantes para projetar sistemas que resolvam os nossos problemas estruturais, e não apenas algoritmos de redes sociais.",
                    perguntas: [
                        { 
                            pergunta: "O que é o 'êxodo de cérebros' mencionado no texto?", 
                            opcoes: ["A viagem de férias dos estudantes.", "A migração de profissionais altamente qualificados para corporações de outros centros/países.", "O uso excessivo de redes sociais.", "A troca de cursos nas universidades."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "Qual é o impacto negativo desse êxodo para a região de origem?", 
                            opcoes: ["Aumento da população.", "Enfraquecimento da capacidade de resolver problemas locais através da inovação tecnológica.", "Melhoria da infraestrutura urbana.", "Queda no preço dos aluguéis."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "Como o texto define 'justiça social no ambiente digital'?", 
                            opcoes: ["Distribuir celulares gratuitos.", "Reter talentos criando projetos estratégicos nacionais que resolvam nossos desafios estruturais.", "Garantir que todos tenham perfil em redes sociais estrangeiras.", "Proibir empresas de tecnologia de operar."], 
                            respostaCorreta: 1 
                        }
                    ]
                },
                {
                    id: "q4_s2",
                    titulo: "Módulo 4: O Analfabetismo do Século XXI",
                    tipo: "texto",
                    conteudoTexto: "Hoje, saber ler e escrever não é suficiente. O analfabetismo funcional agora engloba a incapacidade de interpretar o impacto de algoritmos, de entender como a desinformação é monetizada e de utilizar o ecossistema digital para a cidadania. Uma população que apenas consome conteúdo passivamente não constrói um país forte. É preciso letramento crítico para que a tecnologia seja ferramenta de emancipação, não de controle.",
                    perguntas: [
                        { 
                            pergunta: "Como o texto redefine o analfabetismo no cenário atual?", 
                            opcoes: ["Como a incapacidade de usar um teclado.", "Como a dificuldade de interpretar criticamente o ambiente digital e seus algoritmos.", "Como o não uso de smartphones.", "Como a falta de acesso à banda larga."], 
                            respostaCorreta: 1 
                        },
                        { 
                            pergunta: "Qual é o perigo de uma população ser apenas consumidora passiva de conteúdo?", 
                            opcoes: ["Ela constrói um país mais pacífico.", "Ela se torna mais inteligente coletivamente.", "Ela não constrói um país forte e fica vulnerável ao controle e à desinformação.", "Ela estimula a economia local."], 
                            respostaCorreta: 2 
                        },
                        { 
                            pergunta: "O que é necessário para que a tecnologia emancipe a população?", 
                            opcoes: ["Aumentar o tempo de tela diário.", "O letramento crítico e a educação digital estratégica.", "Proibir o uso de algoritmos.", "Comprar equipamentos mais modernos."], 
                            respostaCorreta: 1 
                        }
                    ]
                }            
            ]
        }
    ]
};