import './assets/index.css';
import Button from './Button.jsx'
import { startTimer } from './helpers/app.js';

function App() {

  return (
    <div className='max-w-[700px] m-auto my-4 px-2 flex flex-col justify-center items-center'>
      {/* Main buttons */}
      <div className='flex mt-4 bg-red-700 rounded-full p-1 gap-1 text-white'>
        <Button onClick={startTimer} className='focus:bg-red-600' type="Trabajo" />
        <Button onClick={startTimer} className='focus:bg-red-600' type="Descanso" />
        <Button onClick={startTimer} className='focus:bg-red-600' type="Descanso Largo" />
      </div>

      {/* Pomodoro Timer */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <p className='text-2xl font-semibold'>Total: <span className='text-red-800'>0 minutos</span></p>
        <span className="time text-5xl font-semibold bg-red-700 text-white px-[3.3rem] py-24 rounded-full mt-6">00:00</span>
        <div className="flex gap-4 mt-8 [&>*]:border [&>*]:border-red-700 [&>*]:bg-white [&>*]:text-red-700 [&>*]:px-4 [&>*]:rounded">
            <Button type="Pausar" />
            <Button type="Reiniciar" />
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 [&>*]:bg-red-700 [&>*]:text-white [&>*]:rounded">
        <Button type="Reiniciar sesión" />
        <Button type="Guardar tiempo" />
        <Button type="Estadisticas" />
      </div>
    </div>
  )
}

export default App;