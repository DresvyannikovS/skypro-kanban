import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const StyledDayPicker = styled(DayPicker)`
margin-left: 15px;
  --rdp-font-family: Roboto;
  --rdp-day-height: 1.75rem;
  --rdp-day-width: 1.75rem;
  --rdp-day_button-height: 10px;
  --rdp-day_button-width: 10px;
  --rdp-nav_button-height: 1.25rem;
  --rdp-nav_button-width: 1.5rem;
  --rdp-nav-height: 1.75rem;
  --rdp-weekday-font: 400 smaller var(--rdp-font-family);
  --rdp-selected-font: bold large var(--rdp-font-family);

  --rdp-accent-color: blue; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: #f0f0ff; /* The accent background color used for selected days and UI elements. */

  --rdp-day-font: inherit; /* The font used for the day cells. */

  --rdp-day_button-border-radius: 100%; /* The border radius of the day cells. */
  --rdp-day_button-border: 2px solid transparent; /* The border of the day cells. */

  --rdp-selected-border: 2px solid var(--rdp-accent-color); /* The border of the selected days. */
  --rdp-disabled-opacity: 0.5; /* The opacity of the disabled days. */
  --rdp-outside-opacity: 0.75; /* The opacity of the days outside the current month. */
  --rdp-today-color: var(
    --rdp-accent-color
  ); /* The color of the today's date. */

  --rdp-dropdown-gap: 0.5rem; /* The gap between the dropdowns used in the month captons. */

  --rdp-month_caption-font: bold larger var(--rdp-font-family); /* The font of the month caption. */
  --rdp-months-gap: 2rem; /* The gap between the months in the multi-month view. */

  --rdp-nav_button-disabled-opacity: 0.5; /* The opacity of the disabled navigation buttons. */

  --rdp-range_middle-background-color: var(
    --rdp-accent-background-color
  ); /* The color of the background for days in the middle of a range. */
  --rdp-range_middle-font: normal medium var(--rdp-font-family); /* The font for days in the middle of a range. */
  --rdp-range_middle-foreground-color: white; /* The font for days in the middle of a range. */
  --rdp-range_middle-color: inherit; /* The color of the range text. */

  --rdp-range_start-color: white; /* The color of the range text. */
  --rdp-range_start-background: linear-gradient(
    var(--rdp-gradient-direction),
    transparent 50%,
    var(--rdp-range_middle-background-color) 50%
  ); /* Used for the background of the start of the selected range. */
  --rdp-range_start-date-background-color: var(
    --rdp-accent-color
  ); /* The background color of the date when at the start of the selected range. */

  --rdp-range_end-background: linear-gradient(
    var(--rdp-gradient-direction),
    var(--rdp-range_middle-background-color) 50%,
    transparent 50%
  ); /* Used for the background of the end of the selected range. */
  --rdp-range_end-color: white; /* The color of the range text. */
  --rdp-range_end-date-background-color: var(
    --rdp-accent-color
  ); /* The background color of the date when at the end of the selected range. */

  --rdp-week_number-border-radius: 100%; /* The border radius of the week number. */
  --rdp-week_number-border: 2px solid transparent; /* The border of the week number. */
  --rdp-week_number-font: 400 small var(--rdp-font-family); /* The font of the week number cells. */
  --rdp-week_number-opacity: 0.75; /* The opacity of the week number. */
  --rdp-weeknumber-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-weekday-opacity: 0.75; /* The opacity of the weekday. */
  --rdp-weekday-padding: 0.5rem 0rem; /* The padding of the weekday. */
  --rdp-weekday-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-gradient-direction: 90deg;
`;
