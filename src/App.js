import './App.css';
import Accordion from "./components/Accordion"

let data = [ {
  name: "sachin" ,
  desc : "Sachin Ramesh Tendulkar is an Indian former international cricketer who captained the Indian national team. He is regarded as one of the greatest batsmen in the history of cricket"
},
{
  name: "virat" ,
  desc : "Virat Kohli is an Indian international cricketer and former captain of the Indian national team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman."
},
{
  name: "dhoni" ,
  desc : "Mahendra Singh Dhoni, is a former international cricketer who captained the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is currently the captain of Chennai Super Kings, a franchise based team of Indian Premier League."
}
 ]
function App() {
  return (
    <div>
      <Accordion data={data} />
    </div>
  );
}

export default App;
