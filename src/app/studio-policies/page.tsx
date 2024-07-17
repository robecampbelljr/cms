import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from '../images/lessonbanner.png';
import { policySection } from "../component-content/studiopolicies-info";

const studiopolicies = () => {

  return (
    <div className="app">
      <Header image={banner}/>
      <h1 className="lesson-header cursive flex-center"><u>Studio Policies</u></h1>
      {policySection.map((policy, index) => {

        return (
          <div key={`${policy}-${index}`} className="policy">
            <h3 className="cursive">{policy.title}</h3>
            <ul>
              {policy.bullets.map((bullet) => {
                return (
                  <li key={bullet}>{bullet}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
      <Footer />
    </div>
  )
}

export default studiopolicies;