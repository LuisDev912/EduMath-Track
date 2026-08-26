import type { ToastProps } from './Toast.types.ts';

export function Toast({
    title,
    content,
    variant = "default",
    durationTime = 3
}: ToastProps) { 
    return (
        <div
            className="toast"
            role="status"
            aria-live="polite"
            aria-labelledby="toast-title"
            aria-describedby="toast-message"
        >
            <div className="toast-content">
                <div className="toast__heading">
                    <strong
                        className="toast__title"
                        id="toast-title"
                    >
                        Notification
                    </strong>

                    <button
                        className="toast__close"
                        type="button"
                        aria-label="Close notification"
                    >
                        &times;
                    </button>
                </div>

                <p
                    className="toast__message"
                    id="toast-message"
                >
                    This is a toast notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    );
};