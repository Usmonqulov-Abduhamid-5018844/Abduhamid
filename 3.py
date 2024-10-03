import os
os.system("cls")
class Aktiyor:
    def __init__(self, ism, familya, kinolar, davomad):
        self.ism = ism
        self.familya = familya
        self.kinolar_soni = kinolar
        self.daromad = float(daromad)

    def show(self, f):
        f.write(f"Ismi:           {self.ism}\n")
        f.write(f"Familya:        {self.familya}\n")
        f.write(f"Kinolar soni:   {self.kinolar_soni}\n")
        f.write(f"Daromadi:       {self.daromad}\n")

if __name__ == "__main__":
    ls = []
    for x in range(10):
        ism = input("Ismni kriting >>> ")
        fam = input("Familyani kriting >>> ")
        kino = input("Olgan kinolar sonini kriting >>> ")
        daromad = input("Daromadingizni kriting >>> ")
        ls.append(Aktiyor(ism, fam, kino, daromad))

    ls.sort(key = lambda aktiyor: aktiyor.daromad)

    f = open("Aktiyor.txt", "wt")
    for x in ls:
        x.show(f)
        f.write("\n*******************************\n")
    
    f.close()
