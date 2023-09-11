export const handleNumberInputChange = (evt, setState) => {
  const { name, value } = evt.target;
  const regex = /\d+|\//gm;
  if (value === "" || regex.test(value)) {
    setState((prev) => ({ ...prev, [name]: value }));
  }
}

export const handleTextInputChange = (evt, setState) => {
  const { name, value } = evt.target;
  const regex = /^[A-Za-z\s]+$/;
  if (value === "" || regex.test(value)) {
    setState((prev) => ({ ...prev, [name]: value }));
  }
};

export const handleInputFocus = (evt, setState) => {
  setState((prev) => ({ ...prev, focus: evt.target.name }));
};

export const handleCardNumberDisplay = (card) => {
  const rawText = [...card.split(' ').join('')]
  const creditCard = []
  rawText.forEach((t, i) => {
    if (i % 4 === 0 && i !== 0) creditCard.push(' ')
    creditCard.push(t)
  })
  return creditCard.join('');
}

export const handleExpiryDateDisplay = (expiry) => {
  const rawText = [...expiry.split(' ').join('')]
  const expiryDate = []
  rawText.forEach((t, i) => {
    if (i === 2 ) expiryDate.push('/')
    return expiryDate.push(t)
  })
  return expiryDate.join('');
}