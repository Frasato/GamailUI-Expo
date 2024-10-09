export type EmailDataProps = (typeof EMAILS)[0];

export const EMAILS = [
    {
        id: "1",
        name: "Jhon Smith",
        avatar: "https://mighty.tools/mockmind-api/content/human/65.jpg",
        marker: "important",
        subject: "What is Lorem Ipsum?",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        star: false,
        date: "April 12"
    },
    {
        id: "2",
        name: "Nicholas Jail",
        avatar: "https://mighty.tools/mockmind-api/content/human/3.jpg",
        subject: "Why do we use it?",
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        star: true,
        date: "December 12"
    },
    {
        id: "3",
        name: "Ted Steve",
        avatar: "https://mighty.tools/mockmind-api/content/human/2.jpg",
        subject: "Where does it come from?",
        message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        star: false,
        date: "March 12"
    }
]