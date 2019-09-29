function solution(worker) {
    if (worker.dizziness) {
        const requiredWaterAmount = worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated += requiredWaterAmount;
        worker.dizziness = false;
    }

    return worker
}