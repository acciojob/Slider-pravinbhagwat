# Slider

The task is to create a react based application which Renders Slider based reviews of a pre-defined data provided below.

**Features**
-
- For the slider there should be reviews of few empolyees which is being rendered in slider format. ie. after every 3 seconds the slider changes the slide to the next review.
- apart from the natural 3sec auto slide, we have 2 buttons enabaling the control for the maual control.
- after reaching the end of list of reviews for either side, we need to iterate the slider circularly. ie. if there are 4 reviews and going to next of 4 we should see the first review and similarly for previous for first review.

**Instructions**
-
- For the main application there should be a heading containing the word `Reviews` at the top of applicatio having an `id` of **review-heading**.
- In the review section it should be wrraped in a container having an `id` of **review-container**.
- for each person we need to render the name of person providing review with an `id` of **person-`index`** where index is `0` based indexing as per the given data.
- for the image rendering it should have the id as **person-`index`-image** where index is 0 based as per the given data below.
- There should be a next button with `className` **next** and previous button with `className` **prev**.

**Data**
-
```
[
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];

```
