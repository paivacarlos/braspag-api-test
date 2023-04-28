const PayloadWithoutMerchantOrderId = {  
    "Customer":{  
       "Name":"Nome do Comprador",
       "Identity":"12345678909",
       "IdentityType":"CPF",
       "Email":"comprador@braspag.com.br",
       "Birthdate":"1991-01-02",
       "IpAddress":"127.0.0.1",
       "Address":{  
          "Street":"Alameda Xingu",
          "Number":"512",
          "Complement":"27 andar",
          "ZipCode":"12345987",
          "City":"São Paulo",
          "State":"SP",
          "Country":"BRA",
          "District":"Alphaville"
       },
       "DeliveryAddress":{  
          "Street":"Alameda Xingu",
          "Number":"512",
          "Complement":"27 andar",
          "ZipCode":"12345987",
          "City":"São Paulo",
          "State":"SP",
          "Country":"BRA",
          "District":"Alphaville"
       }
    },
    "Payment":{  
       "Provider":"Simulado",
       "Type":"CreditCard",
       "Amount":10000,
       "Currency":"BRL",
       "Country":"BRA",
       "Installments":1,
       "Interest":"ByMerchant",
       "Capture":true,
       "Authenticate":false,
       "Recurrent":false,
       "SoftDescriptor":"Mensagem",
       "DoSplit":false,
       "CreditCard":{  
          "CardNumber":"4551870000000181",
          "Holder":"Nome do Portador",
          "ExpirationDate":"12/2021",
          "SecurityCode":"123",
          "Brand":"Visa",
          "SaveCard":"false",
          "Alias":"",
          "CardOnFile":{
             "Usage": "Used",
             "Reason":"Unscheduled"
          }
       },
       "Credentials":{  
          "Code":"9999999",
          "Key":"D8888888",
          "Password":"LOJA9999999",
          "Username":"#Braspag2018@NOMEDALOJA#",
          "Signature":"001"
       },
       "ExtraDataCollection":[  
          {  
             "Name":"NomeDoCampo",
             "Value":"ValorDoCampo"
          }
       ]
    }
 }
 
 export default PayloadWithoutMerchantOrderId