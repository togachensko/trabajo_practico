import SubjectCards from "../SubjectCard";
import { useEffect, useState } from 'react'
import { httpGet } from "../../utils/httpFunctions";




const Compra = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategory] = useState('')


  const fetchProducts = () => {
    httpGet(`api/product/`)
        .then((res) => setProducts(res.data))
  }


  useEffect(fetchProducts, [])

  let finalSubjects;

  let category_filter = categories;

  if (category_filter != '') {
    finalSubjects = products.filter((subject) => {
      return subject.category == category_filter;
    })
  } else {
    finalSubjects = products;
  }


  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">
          <h4>Viviendas disponibles para Comprar</h4>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {finalSubjects.map((subjects) => {
              return <SubjectCards subject={subjects} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compra;
