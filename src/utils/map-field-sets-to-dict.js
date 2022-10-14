/**
 * Build id value dict
 * @param {array} fieldSets array of fieldSets
 */
export const mapFieldSetsToDict = (fieldSets) => {
  const fieldsDict = {};
  fieldSets.forEach((fieldSet) => {
    if (Array.isArray(fieldSet)) {
      const mappedFieldSet = mapFieldSetsToDict(fieldSet);
      Object.keys(mappedFieldSet).forEach((id) => {
        fieldsDict[id] = mappedFieldSet[id];
      });
    } else {
      fieldsDict[fieldSet.id] = fieldSet;
    }
  });
  return fieldsDict;
};
