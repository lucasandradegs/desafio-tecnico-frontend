import { Container, Content , Form} from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import React, { useState } from "react";

export default function Home() {
    const [file, setFile] = useState();
    const [formData, setFormData] = useState([]);
    const [product_code, setCode] = useState("");
    const [new_price, setNewPrice] = useState("");

    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = (string) => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        if (csvRows[csvRows.length -1] === "") {
            csvRows.pop()
        }
    
        const data = csvRows.map((i) => {
          const values = i.split(",");
          const obj = csvHeader.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
          }, {});
          console.log(obj)
          return obj;
        });
    
        setFormData(data);
        console.log(data)
      };

      const handleOnSubmit = (e) => {
        e.preventDefault();
    
        if (file) {
          fileReader.onload = function (event) {
            const text = event.target.result;
            csvFileToArray(text);
          };
    
          fileReader.readAsText(file);
        }
      };

      const handleInputChange = (fieldName, value, rowIndex) => {
        const updatedFormData = [...formData];
        updatedFormData[rowIndex][fieldName] = value;
        setFormData(updatedFormData);
      };


      function handleSubmit() {
        console.log(product_code, new_price)
      }

    return (
        <Container>
         <Header />
          <main>
           <Content>
            <h1>Atualização de preços</h1>
             <Section>
              <Form>
               <Input 
                 name="file"
                 id="file"
                 type={"file"}
                 accept={".csv"}
                 onChange={handleOnChange}
                />
                
                <Button 
                 title="Importar CSV" 
                 onClick={(e) => {
                 handleOnSubmit(e)
                }}></Button>
             </Form>                    
             </Section>   

            <Section>
             {formData.length > 0 && (
              <div>
               {formData.map((data, rowIndex) => (
                <div className="display" key={rowIndex}>
                {Object.keys(data).map((key) => (
                <Input
                  title={key}
                  key={key}
                  type="text"
                  placeholder={key}
                  value={data[key]}
                  onChange={(e) =>
                  handleInputChange(key, e.target.value, rowIndex)
                  }/>
              ))}
              </div>
            ))}
            <Button title="Verificar" onClick={handleSubmit}/> 
            </div>
            )}
            </Section>   
                    </Content>  
                </main>
        </Container>
    )
}