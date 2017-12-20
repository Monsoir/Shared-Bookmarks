const TO_CATEGORY = 'to_category';

const Data = [
  
];

export function gotoCategory(category) {
  return {
    type: TO_CATEGORY,
    category,
  };
}
