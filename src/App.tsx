import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie Please",
  "Imma cry",
  "But...why not?",
  "Don't leave me hanging!",
  "Puppy eyes mode: Activated",
  "Not giving up yet!",
  "Hear me out, please?",
  "Wait, let's talk this over!",
  "I thought we had something special!",
  "You wouldn't say no to a cupcake, right?",
  "But I made plans!",
  "You are breaking my heart :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoV39Ks-LQNeQQi_8dZw3ffEIfxUtnr3YY7A&usqp=CAU"
          />
          <div className="valentine-text"> YAYYYY!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with a heart"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRERgSEhQZGBgYGBgYGBgYGBoaGBgYGBoZGRgYGBgcIS4lHCErIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAP4AxwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABGEAACAQMCBAIGBgQLCQEAAAAAAQIDBBEFIQYSMUFRYQcTIjJxchQ1gZGxwkJSsvAjJTZidJKhosHR0hUXJDM0U1Rzghb/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIEAwUG/8QALREBAAICAAQDBwQDAAAAAAAAAAECAxEEEiExBWFxEzJBUYGxwSKR0fA0ofH/2gAMAwEAAhEDEQA/AOygAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsADBO4S6GCVdsnQmOa8Ty60fEgOTPhOhNdyhG4RCA0JVO+hKrKim+aMYze23LJtLf/AOWSjQLDUqkeIJW6xyTt3KWVvmD9nD7e8zfyJAAEAAAAAAAAAAAAAAAAAAeZPCyAlJJZZDq1HJnyrU5jEWiAABYAAAAAGjWNRS4n2fS2mn98TppynSP5Uy/9FT8p1YokABCAAAAAAAAAAAAAAAAAjXNTGxJINxLMiYGEAFwAAAAAAAByKOoVKHFS5MP1k4UpcyziE1Hmx4PY7icCvP5WU/6RS/BHZ9e4gtbCmqlzUUE8qKfWTSbxFfYUStgcyXpn0/8A7Nf+rD/UXHDXpHsNQqSpQcqUksr1vLFSXfDTayvMIbqACAAAAAAAAAAAAAACuqdWWJX11iRMDGAC4AAAAAAAA4RxRqUbTiF3MouSpVITcVjLxFbLJEubmtq9xK7u5ewm1GCfsxj2jHy8+5H9Jn1rX+Mf2UWFhFRtoRj3Se3mccltR0dsNYtPVlgqcFywpxwvFEDUtJhXg5Qjy1Es7dH5FhGhJ9vvMtGhKMs7HCJ01zWJjUuk+ijiH6ZYRpzbdWhinPPM20vclKT6t4ZvR+btG12/0y5rStYJwm94zWYN7Yls08rfv3Lv/exqsJRdWhS5eZcyUJJtZ3SfM8PHc0xMSwTWYd2BzLTvTHYzg3cU6lKXNhRS58xwvaysY+Bb6b6T9Krz5FWdPZvmqx5IbduZvr5Eqt2Bx3iz0ty55UNOgpYk4+ulupbNNwivPo34dDV6fEXEEln6XNfHk/0kTMR3Wisz2fooH5+t+PtassyrONeLa3qRyo46qLjjGftOvcKcXWupU4ypSSqcuZ0m1zww8PK8M9H3HdExMTqWxgAIAAAIV0tyaRbuPcmBFABcAAAAAAAAfn/juylX1mtCLx7rb8lFFta0FTpxpp55VjJg4h+vq/wX7MSaZc0zvTZw8Ry7AAcWgPjR9AEerZUp+9CL+wrLrhqjNNxzB+XT7i7BaLTHZWaxPeFNpWkq2i5S9qeevgvIkSryffBYmGrQUvJje56kViI1CPTqc/sT3T23MfCOo/7K1eGP+XWxCSSTeJPZRz09rlPUaTU0sdzDptpG71q3oSk4pTUsxxnMfbxv8qOmPu454jl2/RwAOzGAAARrvoSSNd9CYEQAFwAAAAAAABw/iH6/r/D/AAiTCFxD9f1/l/LEmGTL7zbg919ABydwAAAAAAAHmpnleOuHgn+halSd7cyq830lR9mLS5VDK5pJ42lnC+DIRT305WtzSvacpRcJx53Hq45XMvPbKOuK2p04Z67rt+kAYLS4jVpxqRzyzipLKw8SWVlfaDuxM4AAEa76EkjXfQmBEABcAAAAAAAAcP4i+v6/yr9mJMIXEP1/X+X8sSzpw2/nPp/mZr15rPR4THN41H9/72hhMF3cQpQc5vZfvgmzppL992QNRslXpOm++MY8V0Oc15Z6uuXHbH0+KDYa7SrTUEmm+me5bNpdSu0bgivTnGrLfHurpv0+09cW6dcRo4UJLffzRMxG+jPW9orMz3ToTjLo0/g8no1bhO2qRlOUk1HHR938DaSto5Z0vS3NGwAFVwi6lRU6M4PumSjzNZi/gyYRLoHoi1j6VpkYNzc6EnTk5POf0o8r8FFpfYCq9B//AEdz/SH+zEGx5rp4AIQES7lvglkO66kwI4ALgAAAAAAADh3EP1/X+X8sSYV/FVxGnrteU5KKwll/LE8f7etl+mjLkiZs2YbRFesrWUm/sNq4X02PJ66ay5e7nsvE0ahqtGptCab8MnU9NilRgl05V8Csb31dMl+aO7Q/StaVlGnXpzlFJ+rcYyccuXTCXUtOBtNuforV7JyU/chN5lGOO7Nf4+4hhVuadKClOFvNTrOKbjs0+q8DpOnXUK1GFSm8wlFOPwOk9tM8e9MtC1K09TVlDsnt8DzGisJd+v2FlxU07jb9VFKc4mKzO4bsN6x1tXbLUgkvwMYbyCtpiZ6QnJatp/TGoDxWliLb7JnsrdfuvV28n3ey+LIiNzpymdRtvfoMebO4fjcN/wB1Au/RVov0TTKfNBxnVzUqJvO72i/L2VHYGvTzm6AAICFddSaQbh+1+/iTAwgAuAAAAAAAAOO3OiK/4jrUJYxy82/TZR/zMuq8OUrWq6UoRbSTys4aecfge6eoxteJLirJN/wUkku8moY/Ay6heTr1JVZ9X/YuyRo4aJnfyfReC0yWieaI5POI3v17tfveH7eqto8j7OJl0niG40+X0e7cqlvP2VPvHPn4FiYr21hWg6c+j/sfZnXLgreOkdXocX4djzVmaRy2+fz9f70bdp+kWFrazceX1dROU5zeeZS8WzW1xta2kFbWFGVVRzjHurL6Z6mqWmn3daKt7ipL1FKWFHxx0x5Gw21tCnHlprlS8DJj4W1utnk8L4Xly9b/AKY/2p73VtQrVJTdBLmecZW3kYY67Om+W4oygv1llo2U8VaakuWSTT7M6zwWPXR6FvCK6/Red+epj7I1CvCceaEk15GU1+6tHZTValn1UnipH9XON0X0JKUVJdGsnnZcNsduWXk5Md8V5peNTH7esPRTW1lLVNRp2kPcUk5vDaUVvLLj08M+LPGvatyL1VPepLbbdrOyx5+R0fgPh9aRYu6rxxdVU04yluot5jBLx6N9dy2DHNrRrvPZi4nNFazv4d3SLWhGnCNOCxGKUYrwUVhIHm1m5QhJ9XFN/FoHWejNtnABAFfXeZfv4lgV1TqyYHgAFwAAAAAAABxLXPr6v8n5UT0QNc+v6/yfkRORs4b3Pq+u8F/xfrP4fQAaHrPmAfQAAAGO5pKpCUH0lHBqVhfXM4RtKFOUqifJmKb6vC+G/ibjPZZ8NzZfQnQX0StWcOV1K8sTccOUOWLWJPrFPP25MXF1idbeB45PL7OY79f26flj4H9H8NObvdQlGdWO8VnmjD+dut5fgWms1p3KVdrljzctFd5SznLz28zY+IrqnGmoTh6yU2lGHi13yuhg07SZ1Knr7pLMdoU17sEumx04aa4q+1t3+Hn6R957a38Xx3ERbLb2cfXy9Z+0d5nW+i202nOFKKqScpY9pvrl74+zp9gJYMUzuZlriNRoABVIytqe8yyZW1OrLQPIALAAAAAAAADiWufX9f5PyInEHXPr6v8AJ+VE42cN7n1fXeC/4n1n8PoAND1gAAfUjWdU1ipOr6i2695fiXWrVnChUkuvLs/N9Cl4UteWk6j96be/kY+LzTSNQ8fxTib0muLHOt9Zny8vV5npd3ytq4bbW8X0+B0X0OcS81N6bVUYzopum84c4tttcr6tdcrszWyksopa3bcmc+tpuWM5679PI8+mS1p1Z8/xETNYmZmfWdv0fKnFtNpNro2t18H2MgB0YwAAAAAK2p7zLIr60cSJgYwAXAAAAAAAAHA+NrqdHWq1SEebHLzLxXLHP+Ba2F7CvTU4d+q7p+ZF4iX8fV/l/LEgXenVKU/X2uz/AEodpfDzJxcR7O3LPZ7Hh3GW4eNT1rvrHxjzj+GxHwr9M1enX9nHLUXWD2f2FjJ8qy9l5npRMWjcdn1GPJTJXnpO4D7gp7viChF8sG6ks4Sjvlvol4l3o/CGqajidT/hKPmv4SSUsNKPWLxnDexyvmpX47Y+I8T4fD8dz8o/ntCg4juqfq3Qy3UlhRhHdt7YWxj4auVKgoZ9qOU13+47TwzwRY6ck6VLmqd6tT2ptptp+EXv1SRT6x6LLK5uJXEKlWg57yjScVFyfvNJp4z4LY8/Pb2vfo+b4nj7Z8vtJrrprXk57fXsKMHKckvBd2W/oh0SvVvp6hWhOEYRcYc0cKbmsNb74UWnlbbmx2vohsY1Izq1a9ZLPsTlHle2N3FJ+fU6HQpRpwjCKxGMVGK8FFYS+5HOlIqy5Ms3ZQAWcQAAAAAIV0tyaRrqO2SYEQAFwAAAAAAABw7iH6/r/L+WJNIfEK/j6v8AKv2YkwyZfebcHutZ1O29deKEXytQy5R657ZJUdAbeateU1+r0+8xWtVRv58+3NFKOe+PA2ETe1YiIlanXfr85+yk4Qt4Q163hGK5VU6dvckfpM/OnDUMcQ23nPP9yR+iztXtDHeNWkABKgAAAAAAAAAAB4qQysHsAVklg+Eq4p90RS4AAkAAAAAHGOKI/wAd1Gl+gsnoxce3MLXVpznlqUF08clQ+J6HhL7jNkrM26NeG9YrqZY+KIKPq5pe0pJJ98eBfU5Zin5I0rU9QqV5xmoS5YtOKw9/MutPvb+65o21pKbilzcsZPlT2WSJpOogjLWLTLNq0lC4tpxk4zVWOHF4eHJJ7r99z9II5LwX6PLqF4rvUHH+D3pwi1JOTXWXgl4ePwOtHWteWNOGS0WtuAAEuYAAAAAAAAAAAAANEStQ7olgkVjTR8LCUE+xilarxLbEQHqUcPB5JAAkQt89yBz2poULvX261CNWjC3fNzJOEZNpQyn32Ztn/wCH0r/wqH9REy2sJQu6lbMeWVKnFJZ5sqU22+2Ny2KpRqVnShFQjTiopJJKKwktkjLTpRj7sUvgkvwMgCAAEAAAAAAAAAAAP//Z"
          />

          <div> Hi (insert the name here), Will you be my VALENTINE?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
