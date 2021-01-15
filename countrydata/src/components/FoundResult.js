import React, { Fragment } from "react";
import ShownBtn from "./ShownBtn";
import Weather from "./Weather";

const FoundResult = ({ foundRes, showRes }) => {
  const renderLogic = (data, isShown) => {
    if (isShown) {
      if (data.length === 1) {
        return renderOne(data[0]);
      } else {
        return renderMany(data);
      }
    } else {
      return <p>Please provide a search phrase</p>;
    }
  };

  const renderMany = (renderee) => {
    return renderee.length <= 4 ? (
      renderee.map((ctry) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {console.log("debug nee", ctry)}
          <p key={ctry.alpha3Code}>{ctry.name}</p>
          <ShownBtn renderFnc={renderOne} data={ctry} />
        </div>
      ))
    ) : (
      <p>Too many matches, please provide a more detailed filter phrase</p>
    );
  };

  const renderOne = (renderee) => {
    return (
      <div>
        <h4>{renderee.name}</h4>
        <p>Capital: {renderee.capital}</p>
        <p>Pop: {renderee.population}</p>
        <b>Languages:</b>
        {renderee.languages.map((lang) => (
          <p key={lang.iso639_2}>{lang.name}</p>
        ))}
        <img src={renderee.flag} alt="The country flag" width="240" height="160" />
        <Weather ctry={renderee} />
      </div>
    );
  };

  // const renderFnc = (showRes) => {
  //   if (showRes) {
  //     if (foundRes.length === 1) {
  //       return (
  //         <div>
  //           <h4>{foundRes[0].name}</h4>
  //           <p>Capital: {foundRes[0].capital}</p>
  //           <p>Pop: {foundRes[0].population}</p>
  //           <b>Languages:</b>
  //           {foundRes[0].languages.map((lang) => (
  //             <p key={lang.iso639_2}>{lang.name}</p>
  //           ))}
  //           <img src={foundRes[0].flag} alt="The country flag" width="240" height="160" />
  //         </div>
  //       );
  //     } else {
  //       return foundRes.length <= 3 ? (
  //         foundRes.map((ctry) => <p key={ctry.alpha3Code}>{ctry.name}</p>)
  //       ) : (
  //         <p>Too many matches, please provide a more detailed filter phrase</p>
  //       );
  //     }
  //   } else {
  //     return <p>Please provide a search phrase</p>;
  //   }
  // };

  return <Fragment>{renderLogic(foundRes, showRes)}</Fragment>;
};

export default FoundResult;
