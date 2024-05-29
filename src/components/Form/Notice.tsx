

export default function Notice() {
    const notices = [
        {
            title: "এজেন্ট এর পরিবর্তে মেগা অটিপি দিয়ে লগিন করুন",
        },
        
      
    ]

    return (
        <div className='my-5'>
            {notices.map(({ title }, index) => (
                <span className='text-primary' key={index}>{title}</span>
            ))}
        </div>
    );
}
