class Employee:
    def __init__(self,name,salary):
        self.name=name
        self.salary=salary
    
    def display(self):
        print("Name:",self.name)
        print("Salary:",self.salary)
    
class Developer(Employee):
    def __init__(self,name,salary,programming_language,**kwargs):
        super().__init__(name,salary,**kwargs)
        self.programming_language=programming_language
        
class Manager(Employee):
    def __init__(self,name,salary,team_size,**kwargs):
        super().__init__(name,salary,**kwargs)
        self.team_size=team_size
    
class TeamLead(Developer,Manager):
    def __init__(self,name,salary,programming_language,team_size):
        super().__init__(
            name=name,
            salary=salary,
            programming_language=programming_language,
            team_size=team_size
        )
    
    def display_TeamLead(self):
        super().display()
        print("Programming Language:",self.programming_language)
        print("Team Size:",self.team_size)

deeven=TeamLead("Deeven",100000,"Python",20)
deeven.display_TeamLead()
print(TeamLead.mro())
