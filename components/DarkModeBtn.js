import DarkModeStyles from './styles/DarkModeStyles';

export default function DarkModeBtn() {
  return (
    <DarkModeStyles>
      <input type="checkbox" class="" id="checkbox"></input>
      <label for="checkbox" class="btn-container">
        <span class="btn-figure"></span>
      </label>
    </DarkModeStyles>
  );
}
