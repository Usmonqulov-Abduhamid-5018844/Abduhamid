class Employee:
    def __init__(self):
        self.familya = None
        self.lavozim = None
        self.oylik = None
class Voris(Employee):
    def __init__(self):
        self.reyting = None
    def kritish(self):
        self.familya = input("Familyani kriting >>> ")
        self.lavozim = input("Lavozimni kriting >>> ")
        self.oylik = int(input("Oylikni kriting >>> "))
        self.reyting = int(input("Reytingni kriting >>> "))
        
    def Reyting(self):
        if self.reyting >= 60 and self.reyting < 75:
            self.oylik = self.oylik * 1.2
        if self.reyting >= 75 and self.reyting < 90:
            self.oylik = self.oylik * 1.4
        if self.reyting >= 90 and self.reyting <= 100:
            self.oylik = self.oylik * 1.6
            
    def show(self):
        print(f"Ismi:           {self.familya}")
        print(f"Familya:        {self.lavozim}")
        print(f"Oylig:          {self.oylik}")
        print(f"reyting:        {self.reyting}")
    
if __name__ == "__main__":
    ls = []
    for x in range(2):
        s = Voris()
        s.kritish()
        ls.append(s)
    
    for x in ls:
        x.Reyting()
    for i in ls:
        i.show()
        print("\n***********************\n")