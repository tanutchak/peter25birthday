// Typing effect for letter
if (document.getElementById("letter-text")) {
    const letterText = `Dear My Peter Pan,

Happy 25th birthday to the most wonderful person in my world!
This is the first year we’re truly celebrating your birthday together, and I really wanted to make it feel special — because your birthday means so much to me.
You’re incredibly precious to me, and celebrating the day you were born and how much you've grown each year is something truly meaningful.

For your 25th year, I wish it brings you so much happiness, growth, and joy in every single day. May everything you’ve been hoping for go just the way you planned — and even if it doesn’t, I hope this year becomes a beautiful step forward, gently preparing you for everything that’s coming next.

If challenges come your way, I hope you’ll overcome them with ease and gain wisdom through them. And please don’t ever worry — on every step of your journey, I’ll be right here, your little chubby cheerleader, walking through both the good and the tough times by your side.

I love you so, so much, my special one.
Thank you for being born and for growing up into the amazing person you are today.
You matter so much to this world, so please always be proud of who you are.

To me, no matter where you are, you’ll always be deeply valuable and cherished. Let’s keep learning together, growing side by side, and looking forward to more magical birthdays together in the years to come.

Love you the mostest in the whole wide world. 🤍

With all my heart,
From Your Wendy.`;

    let i = 0;
    const speed = 50;
    const letterElement = document.getElementById("letter-text");

    function typeWriter() {
        if (i < letterText.length) {
            letterElement.innerHTML += letterText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);

            const rect = letterElement.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.bottom > windowHeight - 100) {
                window.scrollBy({
                    top: 50,
                    behavior: 'smooth'
                });
            }
        }
    }

    typeWriter();
}

// Typing effect for intro section in You as a...
if (document.getElementById("intro-heading")) {
    const introHeadingText = "In my eyes, you are...";
    let i = 0;
    const speed = 50;

    document.body.style.overflow = "hidden";

    function typeWriter() {
        if (i < introHeadingText.length) {
            document.getElementById("intro-heading").innerHTML = introHeadingText.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            document.body.style.overflow = "auto";
        }
    }

    typeWriter();
}

// Fade-in effect for Index sections
document.addEventListener('DOMContentLoaded', () => {
    const indexSections = document.querySelectorAll('.index-section');

    const checkVisibility = () => {
        indexSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
                section.querySelector('h2').classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

// Fade-in effect for You as a... sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.you-section');

    const checkVisibility = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
                section.querySelector('h2').classList.add('visible');
                const detail = section.querySelector('.section-detail');
                if (detail) {
                    detail.classList.add('visible'); // โชว์ detail เมื่อเลื่อนถึง
                }
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
