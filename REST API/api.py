import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

print('started')
# Initializing the fast API server
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Loading up the trained model
model = pickle.load(open('../MODEL/model.pkl', 'rb'))

# Defining the model input types
class person(BaseModel):
    glucose: int
    bp: int
    insulin: int
    bmi: float
    dpf: int


# Setting up the home route
@app.get("/")
def read_root():
    return {"data": "Welcome to online diabetes prediction model"}

# Setting up the prediction route
@app.post("/prediction/")
async def get_predict(data: person):
    sample = [[
        data.glucose,
        data.bp,
        data.insulin,
        data.bmi,
        data.dpf
    ]]

    patient = model.predict(sample).tolist()[0]

    return {
        "data": {
            'prediction': patient,
            'interpretation': 'have high chances of getting diabetes' if patient == 1 else 'you are healthy!'
        }
    }

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')