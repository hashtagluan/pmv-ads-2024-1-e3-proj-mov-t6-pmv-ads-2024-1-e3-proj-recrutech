# Especificações do Projeto

A concepção deste projeto foi impulsionada pela análise atenta das recorrentes queixas presentes nas redes sociais, que destacavam a dificuldade persistente em encontrar oportunidades profissionais nas atuais plataformas, aliada à crescente complexidade e monotonia dos processos de recrutamento. A proposta centraliza-se na criação de uma plataforma mobile intuitiva, estrategicamente desenvolvida para simplificar o recrutamento, direcionando-se às demandas específicas dos desenvolvedores. Essa abordagem visa não apenas atender às necessidades imediatas dos profissionais de TI, mas também a fomentar o crescimento e a consolidação de uma comunidade de desenvolvedores mais robusta e colaborativa.

## Personas

Ana Garcia tem 22 anos, é estudante de Ciência da Computação e está no último ano de sua graduação em Ciência da Computação. Atualmente está buscando sua primeira oportunidade de emprego na área de desenvolvimento de software. Ela tem boas habilidades técnicas, mas ainda não possui experiência profissional. Ela está em busca de uma plataforma que seja fácil de usar, onde ela possa encontrar vagas relevantes e ter uma experiência transparente no processo seletivo.

Marcos Oliveira tem 35 anos, trabalhou por mais de uma década como gerente de projetos em uma empresa de consultoria, mas recentemente decidiu fazer uma transição de carreira para a área de desenvolvimento de software. Ele está em busca de uma plataforma que o ajude a encontrar vagas que correspondam às suas habilidades e interesses, facilitando sua transição de carreira de forma suave e eficiente.

Rafael Mendes tem 28 anos, trabalhou como desenvolvedor de software em uma empresa de tecnologia por cinco anos, mas recentemente foi demitido devido a uma reestruturação interna. Agora, ele está em busca de uma nova oportunidade que lhe permita continuar sua trajetória e quer encontrar rapidamente uma vaga que corresponda ao seu nível de experiência e expectativas salariais.

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`                | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                                         |
|-------------------------------------|------------------------------------|------------------------------------------------------------------|
| Estudante de Ciência da Computação | Encontrar vagas de estágio ou para desenvolvedores juniores que se encaixem em meu perfil. | Ter uma chance de aplicar minhas habilidades técnicas e iniciar minha carreira profissional na área de TI. |
| Gerente de Projetos em transição de carreira | Encontrar oportunidades de emprego que valorizem minhas habilidades de gestão de projetos e ofereçam oportunidades de aprendizado e crescimento na área técnica. | Realizar uma transição de carreira suave e eficiente, alinhada às minhas experiências anteriores e interesses. |
| Desenvolvedor de software          | Encontrar rapidamente uma nova oportunidade que corresponda ao meu nível de experiência e expectativas salariais. | Continuar minha trajetória profissional, desenvolver minhas habilidades técnicas e me destacar no mercado de trabalho de TI. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, os desenvolvedores enfrentam uma série de desafios no processo de recrutamento na área de desenvolvimento de software. A busca por oportunidades é morosa e muitas vezes opaca, dificultando a identificação de vagas compatíveis. Além disso, os desenvolvedores têm dificuldade em destacar suas habilidades de maneira eficaz, e os processos seletivos carecem de transparência, deixando os candidatos no escuro quanto ao andamento de suas candidaturas. Não há uma plataforma centralizada que atenda a essas necessidades, resultando em uma falta de eficiência e acessibilidade no processo de recrutamento.

O processo de recrutamento na área de desenvolvimento de software hoje geralmente envolve:

#### Busca Manual por Vagas: 
Os desenvolvedores dependem principalmente de plataformas de emprego genéricas e sites de empresas para encontrar vagas.

#### Envio de Currículos: 
Os desenvolvedores enviam currículos para várias vagas sem uma correspondência clara entre suas habilidades e os requisitos das vagas.

#### Falta de Transparência: 
Após a aplicação, os desenvolvedores têm pouca visibilidade sobre o andamento de suas candidaturas e raramente recebem feedbacks úteis.

#### Destaque Limitado para Habilidades: 
As plataformas existentes geralmente não oferecem uma maneira eficaz para os desenvolvedores destacarem habilidades específicas.

### Pessoas Envolvidas: 

#### Desenvolvedores (candidatos): 
São profissionais de TI com habilidades em desenvolvimento de software que estão em busca de oportunidades de emprego. Eles buscam uma plataforma que facilite o processo de encontrar vagas alinhadas com suas habilidades e interesses.

#### Recrutadores: 
Podem ser representantes das empresas ou profissionais independentes que ajudam as empresas a encontrar e selecionar os candidatos certos para as vagas disponíveis. Eles desempenham um papel importante no processo de recrutamento, ajudando a identificar os candidatos mais adequados para as empresas.


### Descrição Geral da Proposta

A proposta é desenvolver o RecruTech, uma plataforma mobile intuitiva para melhorar significativamente a experiência dos desenvolvedores no processo de recrutamento. O sistema visa centralizar e simplificar a busca por oportunidades, destacar as habilidades dos desenvolvedores de forma eficaz e melhorar a acessibilidade para desenvolvedores de diferentes origens. A proposta está alinhada com os objetivos estratégicos do negócio, visando fortalecer a comunidade de desenvolvedores e criar um ambiente mais eficiente e inclusivo para o recrutamento na área de desenvolvimento de software.

#### Cadastro Simplificado: 
Desenvolver um formulário de cadastro simples e intuitivo para os usuários que buscam vagas, coletando apenas informações essenciais inicialmente.

#### Perfil de Usuário: 
Criar uma seção de perfil onde os usuários podem adicionar detalhes sobre suas habilidades, experiências e preferências de trabalho.

#### Busca de Vagas: 
Implementar uma função de busca de vagas com filtros relevantes, como localização, tipo de contrato e área de atuação.

### Processos de negócios (BPMN)

Business Process Modeling Notation (BPMN) é um padrão desenvolvido visando oferecer uma notação mais facilmente compreendida e usada por todos os envolvidos nos processos de negócio. 

As regras de negócios foram traduzidas dentro desta metodologia para que seja possível ilustrar as regras de negócios de forma a traduzir nas entregas necessárias dentro do sistema.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/117364316/aae21ddd-380d-410a-b60f-5b42fa76b098)

Este modelo simplificado aborda as principais funcionalidades do processo de cadastro e busca de vagas, proporcionando uma experiência mais direta para os usuários que buscam oportunidades na área de desenvolvimento de software.
Abaixo segue o detalhamento individual dos processos:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/128554958/10e17f81-093e-41ef-9a6b-695865eca5b1)


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/117364316/ebd1cde6-b6b8-4801-9705-1b81547e0a37)


## Indicadores de Desempenho

Indicadores de desempenho desempenham um papel vital na avaliação do sucesso e na orientação das estratégias empresariais. Por meio de métricas quantificáveis e mensuráveis, as organizações podem monitorar e avaliar o desempenho de diversos aspectos do negócio. Esses indicadores fornecem insights valiosos sobre o progresso em direção aos objetivos estabelecidos, ajudando na identificação de áreas de melhoria e no direcionamento de recursos de forma mais eficiente.

| Indicador                           | Objetivo                                                                                                  | Descrição                                                                                                                     | Cálculo                                                    | Fonte de Dados                                 | Perspectiva                                                                                                                                |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Taxa de Conversão de Candidatos      | Aumentar a eficiência do processo de recrutamento, convertendo um maior número de candidatos em membros ativos na plataforma | Mede a porcentagem de candidatos que completam o processo de cadastro na plataforma em relação ao total de visitantes           | (Número de candidatos cadastrados / Número total de visitantes) * 100 | Registros de cadastros na plataforma.            | Uma taxa crescente indica uma maior aceitação e adoção da plataforma pelos desenvolvedores, refletindo um aumento na eficiência do processo de recrutamento                                        |
| Tempo Médio de Preenchimento do Perfil | Simplificar o processo para os desenvolvedores, reduzindo o tempo necessário para preencher seus perfis na plataforma | Mede o tempo médio que os desenvolvedores levam para completar o preenchimento do perfil na plataforma                         | Soma do tempo de preenchimento de todos os perfis / Número total de perfis preenchidos                                   | Registros de tempo de preenchimento de perfil na plataforma | Uma redução no tempo médio de preenchimento indica que a plataforma está sendo percebida como intuitiva e amigável, facilitando a adesão dos desenvolvedores                                           |
| Satisfação do Usuário                | Garantir uma experiência positiva para os desenvolvedores na plataforma                                     | Mede a satisfação dos usuários por meio de pesquisas regulares ou feedbacks diretos                                           | Pontuação média de satisfação (em uma escala de 1 a 5, por exemplo) | Pesquisas de satisfação, feedbacks diretos dos usuários | Um aumento na satisfação do usuário é indicativo de uma plataforma bem-sucedida, atendendo às expectativas e necessidades dos desenvolvedores                                                        |

Baseando nos indicadores de desempenho foram criados 7 indicadores adicionais para gestao incluindo as projeções para os primeiros 12 meses de projeto:

Indicador 1: Vagas preenchidas
Indicador 2: disponibilidade do sistema 24 horas por dia
Indicador 3: Satisfação do candidato em relação ao processo
Indicador 4: Satisfação dos recrutadores ao processo 
Indicador 5: Compatibilidade dos candidatos com perfil para a vaga
Indicador 6: Efetividade das contratações
Indicador 7: Turnover pós contratação

Indicador 1: Vagas preenchidas

Este indicador mede a eficácia do processo de recrutamento em preencher as vagas disponíveis na organização. Ele reflete a capacidade do processo de atrair candidatos qualificados e selecionar aqueles que melhor se encaixam nas posições em aberto.

Meta estipulada: A meta é preencher todas as vagas abertas dentro de um determinado período, com candidatos qualificados e compatíveis com os requisitos da posição. Objetivo: 95% de efetividade

Como mensurar: Este indicador pode ser mensurado contando o número de vagas preenchidas e o número de processos encerrados,

Periodicidade: A mensuração deve ser realizada mensalmente

Este indicador fornece uma visão geral da eficácia do processo de recrutamento em atrair e selecionar os candidatos certos para preencher as vagas disponíveis na organização.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/128554958/f6ca136b-55c6-4673-ad1d-68f87632ee04)

Indicador 2: Disponibilidade do sistema 24 horas por dia

Este indicador avalia a disponibilidade do sistema de recrutamento durante todo o dia. Uma vez que muitos candidatos podem aplicar-se a qualquer momento, é essencial que o sistema esteja sempre disponível para receber inscrições e processar informações.

Meta estipulada: A meta é garantir que o sistema de recrutamento esteja disponível 24 horas por dia, 7 dias por semana, com um tempo mínimo de inatividade planejada para manutenção e atualizações.

Como mensurar: A disponibilidade do sistema pode ser monitorada usando ferramentas de monitoramento de tempo de atividade, que registram o tempo em que o sistema está operacional e o tempo de inatividade programado.

Periodicidade: A mensuração deve ser realizada semanalmente

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/128554958/38e81e50-45bd-4c4d-8bcc-205c8afa5b2c)

Indicador 3: Satisfação do candidato em relação ao processo

Este indicador mede a satisfação geral dos candidatos com o processo de recrutamento, desde a aplicação até a oferta de emprego. Ele reflete a experiência geral do candidato e principalmente na percepção de um processo simplificado

Meta estipulada: A meta é alcançar uma alta taxa de satisfação do candidato, com a maioria dos candidatos expressando satisfação com o processo de recrutamento e comunicação da empresa.

Como mensurar: A satisfação do candidato pode ser mensurada por meio de pesquisas de feedback após cada etapa do processo de recrutamento, perguntando aos candidatos sobre sua experiência, pontos fortes e áreas de melhoria.

Periodicidade: A mensuração deve ser realizada mensalmente

Esses indicadores fornecem informações valiosas sobre a eficácia do sistema de recrutamento, a satisfação dos candidatos e a disponibilidade do sistema, permitindo que a empresa avalie e melhore continuamente seus processos de recrutamento e seleção.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/128554958/2f4f4acf-45e3-490a-b6cc-e08db04b1be0)

Indicador 4: Satisfação dos recrutadores com o processo

Este indicador avalia a satisfação dos recrutadores com o processo de recrutamento, incluindo aspectos como eficiência, qualidade dos candidatos e adequação do processo às necessidades da empresa. Dessa forma mensurar a percepção de um processo simplificado.

Meta estipulada: A meta é garantir uma alta taxa de satisfação dos recrutadores, com a maioria expressando satisfação com o processo de recrutamento e seleção.

Como mensurar: A satisfação dos recrutadores pode ser mensurada por meio de pesquisas de feedback periódicas, questionários ou entrevistas individuais, onde os recrutadores podem fornecer comentários sobre o processo e sugerir melhorias.

Periodicidade: A mensuração deve ser realizada mensalmente

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/128554958/d8d3dc1e-8880-467f-9081-6f98669d4c17)


Indicador 5: Compatibilidade dos candidatos com o perfil para a vaga

Este indicador avalia o quão bem os candidatos selecionados se encaixam com o perfil da vaga em termos de habilidades, experiência e características pessoais.

Meta estipulada: A meta é selecionar candidatos que sejam altamente compatíveis com o perfil da vaga, minimizando a lacuna entre as habilidades e experiências necessárias e as habilidades e experiências dos candidatos selecionados.

Como mensurar: A compatibilidade dos candidatos pode ser avaliada por meio de análises comparativas entre os requisitos da vaga e as qualificações dos candidatos selecionados, além de feedbacks dos gestores de contratação e desempenho dos candidatos após a contratação.

Periodicidade: A mensuração deve ser realizada mensalmente

Esses indicadores são fundamentais para garantir um processo de recrutamento eficaz, que atenda tanto às necessidades dos candidatos quanto às da empresa, promovendo a satisfação de ambas as partes e contribuindo para o sucesso organizacional.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/128554958/ef91d6d9-cae2-4ea8-9068-82c6e787e22a)

Indicador 6: Efetividade das contratações

Este indicador avalia a eficácia das contratações feitas após o processo de recrutamento. Ele analisa o desempenho e a contribuição dos novos contratados para a organização.

Meta estipulada: A meta é garantir que as contratações realizadas atendam às expectativas de desempenho e contribuam positivamente para os objetivos da empresa.

Como mensurar: A satisfação dos recrutadores pode ser mensurada por meio de pesquisas de feedback periódicas, questionários ou entrevistas individuais, onde os recrutadores podem fornecer comentários sobre o processo e sugerir melhorias.

Periodicidade: A mensuração deve ser realizada mensalmente

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/128554958/71f702eb-bcee-4053-8963-7cdc4efc8081)

Indicador 7: Turnover pós-contratação

Explicação: Este indicador mede a taxa de rotatividade de funcionários após a contratação. Ele indica o quão bem-sucedida foi a seleção e integração dos novos funcionários na organização.

Meta estipulada: A meta é manter uma baixa taxa de turnover pós-contratação, minimizando o número de funcionários que deixam a empresa dentro de um período específico após serem contratados.

Como mensurar: A satisfação dos recrutadores pode ser mensurada por meio de pesquisas de feedback periódicas, questionários ou entrevistas individuais, onde os recrutadores podem fornecer comentários sobre o processo e sugerir melhorias.

Periodicidade: A mensuração deve ser realizada semestralmente

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/128554958/84f521d4-010e-490d-8490-6904f5d822b8)



Portanto, esses indicadores são cruciais para avaliar a eficácia do processo de recrutamento e seleção, bem como o impacto das contratações na organização a longo prazo. Ao acompanhar esses indicadores de forma consistente, as empresas podem identificar áreas de melhoria e implementar estratégias para otimizar seu processo de contratação e retenção de talentos.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o sistema autentique os usuários.| ALTA | 
|RF-002| O sistema deve permitir o cadastro, edição, visualização e exclusão de vagas.  | ALTA |
|RF-003| Os usuários devem poder pesquisar vagas com base em critérios como linguagem de programação, nível de experiência, remuneração e localização. | ALTA | 
|RF-004| Os desenvolvedores devem poder enviar seus currículos para as vagas de interesse através do aplicativo.   | ALTA |
|RF-005| Os usuários deverão receber notificações via email de acordo com suas preferências e vagas. | MÉDIA | 
|RF-006| Os usuários recrutadores devem ter acesso ao currículo dos desenvolvedores que aplicarem para a vaga.   | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
| RNF-001 | As informações dos usuários, como dados pessoais e currículos, devem ser protegidas por medidas de segurança, como criptografia. | ALTA | 
| RNF-002 | O aplicativo deve ser compatível com as principais plataformas móveis, como iOS e Android. | MÉDIA | 
| RNF-003 | A interface do usuário deve ser intuitiva e fácil de usar, proporcionando uma experiência amigável aos desenvolvedores e recrutadores. | BAIXA | 
| RNF-004 | O aplicativo deve estar disponível 24/7, com tempo de inatividade mínimo para manutenção programada. | ALTA | 
| RNF-005 | O sistema deve ser capaz de lidar com um aumento significativo no número de usuários e vagas sem comprometer o desempenho. | ALTA | 
| RNF-006 | O aplicativo deve ser responsivo e ter um tempo de carregamento rápido para proporcionar uma boa experiência ao usuário. | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até a data limite de 23/06/2024. |
|02| O projeto deverá ser desenvolvido usando React Native e ASP.NET Core. |

## Diagrama de Casos de Uso

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/117364316/c32e0dba-51f8-4ff2-a8e3-e3523715e25b)


# Matriz de Rastreabilidade
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/117364316/0aa10c30-a504-4677-bef0-d39f8f072c82)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

## 1º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/4d4295c5-e407-470a-8ed2-cabb8e412c70)

## 2º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/a544c2c7-c07f-406e-bd41-0264687d4268)

## 3º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/e7b18193-f5e4-4f1f-a1b4-35d54b4f6dfd)

## 4º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/b79133fd-40c3-4244-8e46-533ac4b9e117)

## 5º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/79e771a1-3da8-40cf-9bc4-8cf111e51cc0)

## Gerenciamento de Equipe

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/b5f77153-5e73-4f09-ba52-9b3717f80218)


## Gestão de Orçamento

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/117364316/cb894711-f065-4613-b549-7635d7731e0b)

