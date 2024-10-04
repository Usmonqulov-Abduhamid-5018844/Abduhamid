import os
os.system("cls")
class Time:
    def __init__(self,soat,minut,sekund):
        self.soat = soat
        self.minut = minut
        self.sekund = sekund
        
    def qolgan_vahd(self):
        z = 86400
        sec = self.soat * 3600 + (self.minut * 60) + self.sekund 
        z -= sec
        S = z // 3600
        M = z % 3600 // 60
        C = z % 3600 % 60
        if self.soat <= 23 and self.minut <= 59 and self.sekund <= 59:
            return "24:00:00 gacha qolgan vaxt %02.0f:%02.0f:%02.0f"%(S,M,C)
        else:
            return "Siz noto'g'ri malumot kritingiz >>> ???"
    def add_minut(self,item):
        min = item
        self.soat += min // 60
        self.minut += min % 60
        if self.minut > 59:
            self.minut = self.minut % 60
            self.soat += 1 
            if self.soat > 23:
                self.soat = self.soat % 23
        
        return "%d minut Qo'shilgandan keyingi vaht %02.0f:%02.0f:%02.0f"%(item,self.soat,self.minut,self.sekund)
    
class Soat(Time):
    def __init__(self,soat,minut,sekund):
        self.soat = soat
        self.minut = minut
        self.sekund = sekund
        
if __name__ == "__main__":
    
    print("\t 1 - obyekr")
    soat,minut,sekund = map(int,input("(12:34:26) quyidagi tartibda soat minut sekunt larni kriting >>> ").split(":"))
    T = Soat(soat,minut,sekund)
    print(T.qolgan_vahd())
    add = int(input("Qo'shish uchun minutni kriting >>> "))
    print(T.add_minut(add))
    print("\n\n")
    
    print("\t 2 - obyekr")
    soat_2,minut_2,sekund_2 = map(int,input("(12:34:26) quyidagi tartibda soat minut sekunt larni kriting >>> ").split(":"))
    T = Soat(soat_2,minut_2,sekund_2)
    print(T.qolgan_vahd())
    add = int(input("Qo'shish uchun minutni kriting >>> "))
    print(T.add_minut(add))
    print("\n\n")
    
    print("\t 3 - obyekr")
    soat_3,minut_3,sekund_3 = map(int,input("(12:34:26) quyidagi tartibda soat minut sekunt larni kriting >>> ").split(":"))
    T = Soat(soat_3,minut_3,sekund_3)
    print(T.qolgan_vahd())
    add = int(input("Qo'shish uchun minutni kriting >>> "))
    print(T.add_minut(add))
    print("\n\n")
    
    print("\t 4 - obyekr")
    soat_4,minut_4,sekund_4 = map(int,input("(12:34:26) quyidagi tartibda soat minut sekunt larni kriting >>> ").split(":"))
    T = Soat(soat_4,minut_4,sekund_4)
    print(T.qolgan_vahd())
    add = int(input("Qo'shish uchun minutni kriting >>> "))
    print(T.add_minut(add))
    print("\n\n")
    
    print("\t 5 - obyekr")
    soat_5,minut_5,sekund_5 = map(int,input("(12:34:26) quyidagi tartibda soat minut sekunt larni kriting >>> ").split(":"))
    T = Soat(soat_5,minut_5,sekund_5)
    print(T.qolgan_vahd())
    add = int(input("Qo'shish uchun minutni kriting >>> "))
    print(T.add_minut(add))
    print("\n\n")