  import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'; 

function KegList(props) {
  return (
    <React.Fragment>
      <h1>Keg List</h1>
      {props.kegList.map((tap) => (
        <Keg
          name={keg.name}
          brand={keg.brand}
          quantityLeft={keg.quantityLeft}
          pricePerPint={keg.pricePerPint}
          proof={keg.proof}
          id={keg.id}
          selection={keg.selection}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;