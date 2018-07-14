import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (
  <div className="box">
    <h1 className="label is-large">Ora aqui esta o questionario e tal</h1>
    <p>O empenho em analisar a estrutura atual da organização assume importantes posições no estabelecimento das posturas dos órgãos
      dirigentes com relação às suas atribuições. Do mesmo modo, o novo modelo estrutural aqui preconizado afeta positivamente a
      correta previsão do orçamento setorial. O incentivo ao avanço tecnológico, assim como o desenvolvimento contínuo de distintas
       formas de atuação talvez venha a ressaltar a relatividade das direções preferenciais no sentido do progresso. Nunca é demais
       lembrar o peso e o significado destes problemas, uma vez que a complexidade dos estudos efetuados acarreta um processo de
       reformulação e modernização de todos os recursos funcionais envolvidos. As experiências acumuladas demonstram que a constante
       divulgação das informações agrega valor ao estabelecimento de alternativas às soluções ortodoxas.</p>
       <br/>
    <Link className="button is-large is-primary" to="/question1" >Comecar</Link>
  </div>
);

export default Welcome;