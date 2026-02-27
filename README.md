# App_Calculo_Resistencia_HTML
Protótipo de um Potencial App que faz o cálculo do valor de resistência de um condutor do tipo resistência de aquecimento. Esse tipo de produto é utilizado em pacotes insulados de vidro duplo no setor de refrigeradores. O App utiliza a Lei de Ohm e também o cálculo de potência.


#Definições:
V = Tensão elétrica em Volts
Pm = Potência por metros, medida em W/m (Watts por metro)
Cmm = Comprimento em milímetros

#Potência Total com conversão de milímetros para metros
P = Pm​ * Cmm/1000 

#Resistência elétrica nominal
Sabemos que: 

P = V²/R #Potência é igual a tensão ao quadrado, dividido pela resistência

ou também

R = V²/P #Resistência é igual a tensão ao quadrado, dividido pela potência

#Substituindo P
R = V²/Pm * (Cmm/1000) #Resistência é igual a tensão a quadrado, dividido pela Potência em metro, que multiplica o comprimento em metro.

#Resultado Final da Formúla
R = 1000*V²/Pm*Cmm #Resistência é igual a mil que multiplica com o tensão ao quadrado, que divide pelo produto de Potência em metro com o Comprimento em metro.


