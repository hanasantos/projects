// Import necessary libraries and components
import { useState, useEffect } from "react";
import "../App.css";

/**
 * useDobraQuatro - Custom hook for managing the state and logic of the DobraQuatro component.
 *
 * This hook provides state management for land area, service costs, and checkboxes. It calculates
 * the costs based on the area and selected services, and updates the displayed total and discounted total.
 *
 * States:
 * - tamanhoGleba: Land area in hectares.
 * - analise: Cost of Territorial Analysis.
 * - estudo: Cost of Feasibility Study.
 * - concept: Cost of Concept Design.
 * - anteproj: Cost of Preliminary Project.
 * - mensagem: Error or information message.
 * - analiseCheck: Checkbox state for Territorial Analysis.
 * - estudoCheck: Checkbox state for Feasibility Study.
 * - conceptCheck: Checkbox state for Concept Design.
 * - anteprojCheck: Checkbox state for Preliminary Project.
 *
 * Functions:
 * - getValorBase: Calculates the base value based on the land area in hectares.
 *
 */
export function useDobraQuatro() {
  // State variables
  const [tamanhoGleba, setTamanhoGleba] = useState(""); // Land area in hectares
  const [analise, setAnalise] = useState(0); // Cost of Territorial Analysis
  const [estudo, setEstudo] = useState(0); // Cost of Feasibility Study
  const [concept, setConcept] = useState(0); // Cost of Concept Design
  const [anteproj, setAnteproj] = useState(0); // Cost of Preliminary Project
  const [mensagem, setMensagem] = useState(""); // Error or information message

  // Checkbox states
  const [analiseCheck, setAnaliseCheck] = useState(true);
  const [estudoCheck, setEstudoCheck] = useState(false);
  const [conceptCheck, setConceptCheck] = useState(false);
  const [anteprojCheck, setAnteprojCheck] = useState(false);

  useEffect(() => {
    if (tamanhoGleba !== "") {
      let ha = parseFloat(tamanhoGleba);
      const valorBase = getValorBase(ha);

      if (typeof valorBase === "number") {
        // Calculate costs based on the base value
        setAnalise(valorBase * 0.15);
        setEstudo(valorBase * 0.35);
        setConcept(valorBase * 0.2);
        setAnteproj(valorBase * 0.3);
        setMensagem(""); // Clear any existing message
      } else {
        // Set error message if valueBase is not a number
        setMensagem(valorBase);
        setAnalise(0);
        setEstudo(0);
        setConcept(0);
        setAnteproj(0);
      }
    }
  }, [tamanhoGleba]);

  useEffect(() => {
    const total =
      (analiseCheck ? analise : 0) +
      (estudoCheck ? estudo : 0) +
      (conceptCheck ? concept : 0) +
      (anteprojCheck ? anteproj : 0);

    // Update total cost display
    document.getElementById("updateTotal").textContent = total.toLocaleString(
      "pt-br",
      {
        style: "currency",
        currency: "BRL",
      }
    );

    // Update discounted total cost display
    const total20 = total * 0.8;
    document.getElementById("updateTotal20").textContent =
      total20.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

    // Reset displayed values if there's an error message
    if (mensagem) {
      document.getElementById("updateTotal").textContent = "R$ 0,00";
      document.getElementById("updateTotal20").textContent = "R$ 0,00";
    }
  }, [
    analiseCheck,
    estudoCheck,
    conceptCheck,
    anteprojCheck,
    analise,
    estudo,
    concept,
    anteproj,
    mensagem,
  ]);

  /**
   * getValorBase - Calculates the base value for the cost based on the land area in hectares.
   */
  function getValorBase(ha) {
    if (ha <= 20) {
      return 20 * 650; // Base value for areas up to 20 hectares
    } else if (ha > 300) {
      return "Acima de 300ha falar com um especialista"; // Message for areas greater than 300 hectares
    }
    // Calculate base value for areas between 20 and 300 hectares
    let valorBase = (-1.07291667 * ha + 671.45833) * ha;
    return valorBase;
  }

  return {
    tamanhoGleba,
    setTamanhoGleba,
    analise,
    estudo,
    concept,
    anteproj,
    mensagem,
    analiseCheck,
    setAnaliseCheck,
    estudoCheck,
    setEstudoCheck,
    conceptCheck,
    setConceptCheck,
    anteprojCheck,
    setAnteprojCheck,
  };
}
