import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import pickle
import numpy as np

#fetching the data from csv
df=pd.read_csv('dbts.csv')
#drop unwanted data fields
new = df.drop(columns=['Pregnancies','Age','SkinThickness'])

X=new.drop(columns=['Outcome'])
Y=new['Outcome']
X.replace(to_replace=0,value=X.mean(),inplace=True)


X_train , X_test , Y_train , Y_test = train_test_split(X,Y,test_size=0.25,random_state= 0)


std=StandardScaler()

X_train_std=std.fit_transform(X_train)
X_test_std=std.transform(X_test)


X_train_std,X_test,Y_train,Y_test=train_test_split(X,Y,random_state=0)
knn=KNeighborsClassifier() 
knn.fit(X_train_std,Y_train)
a = knn.score(X_test_std,Y_test) * 100
#print('Accuracy is = ',a)
predct = dict(zip(new.Outcome.unique(),new.Outcome.unique()))
sample = np.array([[0, 2.9, 1, 78.50, 3.7]])
knn.predict(sample)

import pickle
pickle.dump(knn, open('model.pkl', 'wb'))
