import SliderItem from './SliderItem.vue';

export default {
  title: "SliderItem",
  component: { SliderItem },
}

export const defaultView = {
  render: (args) => ({
    components: { SliderItem },
    setup() {
      return { args };
    },
    template: `<SliderItem v-bind="args"></SliderItem>`

  }),
  args: {
    slider_item: {
      "id": "e9a4adf8-042a-466a-a535-145efa19bcf4",
      "user_id": "ab8c3636-2ae3-4856-a2b1-7dd17b5f4802",
      "user_avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmA_K0xJxXq6VQFwJBXUmtFAvvoJJBmxYZg&usqp=CAU",
      "username": "React.reposit",
      "image": "https://magnet.nextype-demo.ru/upload/resize_cache/iblock/73f/940_450_2/photodune-17057135-female-copywriter-at-her-workplace-s-948x439.jpg",
      "text": [
        "The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.",
        "For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.",
        "In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms",
        "For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year."
      ],
      "second": 5
    }
  }
}
