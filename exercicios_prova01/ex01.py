
alturas = []
alturas_masc = []
qtd_feminino = 0

for i in range(15):
    altura = float(input("Informe a altura: "))
    genero = input("Informe o genero (M/F): ")
    alturas.append(altura)

    if genero == "M" or genero == "m":
        alturas_masc.append(altura)
    elif genero == "F" or genero == "f":
        qtd_feminino += 1


maior = alturas[0]
menor = alturas[0]

for altura in alturas:
    if altura > maior:
        maior = altura
    if altura < menor:
        menor = altura

media_masc = 0
for altura in alturas_masc:
    media_masc += altura
media_masc = media_masc / len(alturas_masc)


print("Maior altura: ", maior)
print("Menor altura: ", menor)
print(f"Media de altura masculina: {media_masc:.2f}")
print("Numero de mulheres: ", qtd_feminino)