import React from "react";
import Directory from "./components/Directory";
import ProductInfo from "./components/ProductInfo";

class App extends React.Component {
  constructor() {
    super();
    this.thumbnailClicker = this.thumbnailClicker.bind(this);
    this.selectOnChange = this.selectOnChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      formValue: '',
      option: 'black',
      mainImage: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_sd.jpg;maxHeight=640;maxWidth=550`,
      uniqueID: 1,
      name: "Sony - PlayStation 4 1TB Console - Jet Black",
      description: `
      Battle friends and foes with the Sony PlayStation 4 Pro console. Its 1TB capacity lets you store plenty of games without an external hard drive, and the dual-shock controller improves your hands-on gaming experience. See enemies in clear, vibrant detail with the included HDMI cable of the Sony PlayStation 4 Pro console.`,
      brand: "Sony",
      department: "Video Games",
      color: "Jet Black",
      subDept: "PlayStation 4",
      sku: 5388900,
      price: 399.99,
      avgRating: 4.8,
      colors: ["black"],
      reviews: [],
      questions: {
        question: `Q: What's the difference between the PS4 Slim and the PS4 Pro?`,
        answer: `A: The PS4 Slim outputs games at full 1080p, while the PS4 Pro can output games at up to 4K resolution (2160p). If you have a 4K television, you'll see a noticeable difference in game quality. Note that not all games support 4K, but some will receive updates such as higher framerates, making gameplay smoother.`,
      },
      images: [
        `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_sd.jpg;maxHeight=640;maxWidth=550`,
        `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_rd.jpg;maxHeight=640;maxWidth=550`,
        `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900cv11d.jpg;maxHeight=640;maxWidth=550`,
      ],
      peopleAlsoBought: [],
      peopleAlsoViewed: [],
      recentlyViewed: false,
    };
  }

  thumbnailClicker(e) {
    console.log(e.target)
    this.setState({ mainImage: e.target.src })
  }

  selectOnChange(e) {
    this.setState({ option: e.target.value })
  }


  // FORM STUFF
  handleChange(event) {
    this.setState({ formValue: event.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let id = this.state.formValue
    fetch(`http://ec2-3-15-234-135.us-east-2.compute.amazonaws.com/api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          uniqueID: data.uniqueID,
          name: data.name,
          description: data.description,
          brand: data.brand,
          department: data.department,
          color: data.color,
          subDept: data.subDept,
          sku: data.sku,
          price: data.price,
          avgRating: data.avgRating,
          colors: data.colors,
          reviews: data.reviews,
          // questions: {
          //   question: data.questions.question,
          //   answer: data.questions.answer,
          // },
          images: data.images,
          peopleAlsoBought: data.peopleAlsoBought,
          peopleAlsoViewed: data.peopleAlsoViewed,
          recentlyViewed: data.recentlyViewed,
          mainImage: data.images[0],
          option: data.colors[0]
        })
      })
    //.catch(console.log("Issue with API"))
    this.setState({ formValue: '' })
  }



  render() {
    const { department, subDept, brand, sku,
      avgRating, name, images, mainImage, price, colors, option
    } = this.state
    return (
      <div id="main-component-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Product ID:
            <input type="text" value={this.state.formValue} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Directory
          department={department}
          subDept={subDept}
        />
        <div id="main display">
          <ProductInfo
            name={name}
            brand={brand}
            sku={sku}
            avgRating={avgRating}
            images={images}
            mainImage={mainImage}
            thumbnailClicker={this.thumbnailClicker}
            price={price}
            options={colors}
            option={option}
            selectOnChange={this.selectOnChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
