
import ToggleComponent from "@/components/ToggleComponent";
const  Prestamista = () => {
    return (
        <div className="space-y-4">
            <ToggleComponent />
            <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
                <div>
                    
                    <h3 className="text-gray-600">Total Invertido</h3>
                    <p className="text-xl font-bold text-gray-900">$45,000</p>
                </div>
                <span className="text-gray-400 text-2xl">📊</span>
            </div>
        </div>
    );
}
 export default Prestamista;
