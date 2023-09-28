
import csv

class DataExtractor:
    
    def __init__(self, data):
        self.data = data
        
        
    def extract(self):
        new_data = []
        q_count = 0
        theme = "Kjønn"
        question = False
        # finne kjønnsfordeling
        for i in range(len(self.data)):
            curr = self.data[i]
            if len(curr) > 1:
                
                if question:
                    question = False
                    
                if list(curr)[0] == curr[list(curr)[0]]:
                    new_data.append({curr[list(curr)[1]]: []})
                    theme = curr[list(curr)[1]]
                    q_count += 1
                    question = True
                    
                if i == 0:
                    new_data.append({list(curr)[1]: []})
    
                if (not ((curr[list(curr)[0]] == "value:") and (curr[list(curr)[1]] == "count:"))) and not question:
                    new_data[q_count][theme].append((curr[list(curr)[0]], curr[list(curr)[1]]))
                
        for element in new_data:
            print(element)
            
