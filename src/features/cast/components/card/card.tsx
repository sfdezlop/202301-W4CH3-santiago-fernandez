import { mockCharacters } from "../../mocks/characters";

export function Card() {
  return (
    <article>
      <h2>{mockCharacters[0].name}</h2>
      <ul>
        <li>
          <img src={mockCharacters[0].image} />
        </li>
        <li>Role: {mockCharacters[0].role}</li>
        <li>Family: {mockCharacters[0].family}</li>
        <li>Age: {mockCharacters[0].age}</li>
        <li>State: {mockCharacters[0].isAlive}</li>
        <li>Verbatim: {mockCharacters[0].verbatim}</li>
      </ul>
    </article>
  );
}
