document.addEventListener("DOMContentLoaded", function () {

    const opening =
        document.getElementById("opening");

    const invitation =
        document.getElementById("invitation");

    const openInvitation =
        document.getElementById("openInvitation");

    const music =
        document.getElementById("weddingMusic");

    const musicButton =
        document.getElementById("musicButton");

    const rsvpButton =
        document.getElementById("rsvpButton");

    const calendarButton =
        document.getElementById("calendarButton");


    const eventDate =
        new Date(
            "2026-11-14T19:30:00+05:30"
        );


    /* =========================
       OPEN INVITATION
    ========================= */

    if (openInvitation) {

        openInvitation.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                opening.style.opacity = "0";

                opening.style.transform =
                    "scale(1.03)";


                setTimeout(
                    function () {

                        opening.style.display =
                            "none";

                        invitation.classList.remove(
                            "hidden"
                        );

                        musicButton.style.display =
                            "flex";

                        window.scrollTo(
                            0,
                            0
                        );

                        startRevealAnimations();


                        if (music) {

                            music.volume = 0.65;

                            const playPromise =
                                music.play();

                            if (
                                playPromise !== undefined
                            ) {

                                playPromise
                                    .then(
                                        function () {

                                            musicButton.classList.add(
                                                "playing"
                                            );

                                        }
                                    )
                                    .catch(
                                        function () {

                                            console.log(
                                                "Music autoplay blocked."
                                            );

                                        }
                                    );
                            }
                        }

                    },
                    700
                );
            }
        );
    }


    /* =========================
       MUSIC
    ========================= */

    if (musicButton && music) {

        musicButton.addEventListener(
            "click",
            function () {

                if (music.paused) {

                    music.play()
                        .then(
                            function () {

                                musicButton.classList.add(
                                    "playing"
                                );

                            }
                        )
                        .catch(
                            function (error) {

                                console.log(error);

                            }
                        );

                } else {

                    music.pause();

                    musicButton.classList.remove(
                        "playing"
                    );
                }
            }
        );
    }


    /* =========================
       COUNTDOWN
    ========================= */

    function updateCountdown() {

        const now =
            new Date().getTime();

        const target =
            eventDate.getTime();

        const difference =
            target - now;


        if (difference <= 0) {

            setCountdown(
                "00",
                "00",
                "00",
                "00"
            );

            return;
        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (
                    difference /
                    (1000 * 60 * 60)
                ) % 24
            );


        const minutes =
            Math.floor(
                (
                    difference /
                    (1000 * 60)
                ) % 60
            );


        const seconds =
            Math.floor(
                (
                    difference /
                    1000
                ) % 60
            );


        setCountdown(

            String(days).padStart(
                2,
                "0"
            ),

            String(hours).padStart(
                2,
                "0"
            ),

            String(minutes).padStart(
                2,
                "0"
            ),

            String(seconds).padStart(
                2,
                "0"
            )
        );
    }


    function setCountdown(
        days,
        hours,
        minutes,
        seconds
    ) {

        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");


        if (daysElement)
            daysElement.textContent = days;

        if (hoursElement)
            hoursElement.textContent = hours;

        if (minutesElement)
            minutesElement.textContent = minutes;

        if (secondsElement)
            secondsElement.textContent = seconds;
    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =========================
       GOLD PARTICLES
    ========================= */

    const particles =
        document.getElementById(
            "particles"
        );


    if (particles) {

        for (
            let i = 0;
            i < 40;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "particle";


            particle.style.left =
                Math.random() * 100 + "%";


            particle.style.animationDuration =
                (
                    8 +
                    Math.random() * 14
                ) + "s";


            particle.style.animationDelay =
                Math.random() * 12 + "s";


            const size =
                1 +
                Math.random() * 3;


            particle.style.width =
                size + "px";


            particle.style.height =
                size + "px";


            particles.appendChild(
                particle
            );
        }
    }


    /* =========================
       REVEAL ANIMATIONS
    ========================= */

    function startRevealAnimations() {

        const elements =
            document.querySelectorAll(
                ".reveal"
            );


        if (!elements.length) {
            return;
        }


        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );
                            }
                        }
                    );

                },

                {
                    threshold: 0.12
                }
            );


        elements.forEach(
            function (element) {

                observer.observe(
                    element
                );
            }
        );
    }


    /* =========================
       WHATSAPP RSVP
    ========================= */

    const whatsappNumber =
        "9149202011";


    const message =
        "Hello! I would love to join Nikhil & Isha's celebration on 14 November 2026 at 7:30 PM. Looking forward to celebrating with you!";


    if (rsvpButton) {

        rsvpButton.href =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(
                message
            );
    }


    /* =========================
       CALENDAR
    ========================= */

    if (calendarButton) {

        calendarButton.addEventListener(
            "click",
            function () {

                const start =
                    "20261114T140000Z";

                const end =
                    "20261114T170000Z";


                const icsContent =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nikhil and Isha//Celebration//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:nikhil-isha-celebration-2026@example.com
DTSTAMP:20261001T000000Z
DTSTART:${start}
DTEND:${end}
SUMMARY:Nikhil & Isha - Celebration
DESCRIPTION:Bachelor & Bachelorette Celebration
LOCATION:Gajebbo Inn & Suites, Sector 39, Opposite Medanta Medicity, Gurugram
END:VEVENT
END:VCALENDAR`;


                const blob =
                    new Blob(
                        [icsContent],
                        {
                            type:
                                "text/calendar;charset=utf-8"
                        }
                    );


                const url =
                    URL.createObjectURL(
                        blob
                    );


                const link =
                    document.createElement(
                        "a"
                    );


                link.href = url;

                link.download =
                    "Nikhil-Isha-Celebration.ics";


                document.body.appendChild(
                    link
                );


                link.click();


                document.body.removeChild(
                    link
                );


                setTimeout(
                    function () {

                        URL.revokeObjectURL(
                            url
                        );

                    },
                    1000
                );
            }
        );
    }

});