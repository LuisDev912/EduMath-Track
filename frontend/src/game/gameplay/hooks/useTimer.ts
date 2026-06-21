import { useState, useEffect } from "react";

export function useTimer(duration: number) { 
    return duration / 1000; // convert milliseconds to seconds for easier use in the countdown component
}