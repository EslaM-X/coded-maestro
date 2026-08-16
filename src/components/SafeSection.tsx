import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * Isolates a section so a single failure can never blank the whole page.
 * The rest of the portfolio keeps rendering; the broken block is skipped.
 */
export default class SafeSection extends Component<{ children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[section error]", error, info.componentStack);
  }

  override render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}
