<script>
    import { createEventDispatcher, tick } from "svelte";
    import CommonHelper from "@/utils/CommonHelper";
    import Toggler from "@/components/base/Toggler.svelte";
    import CopyIcon from "@/components/base/CopyIcon.svelte";
    import tooltip from "@/actions/tooltip";

    const dispatch = createEventDispatcher();

    let classes = "btn-sm btn-hint btn-transparent";
    export { classes as class };

    export let length = 32;

    let secret = "";
    let secretElem;
    let togglerActive = false;

    async function generate() {
        secret = CommonHelper.randomSecret(length);

        dispatch("generate", secret);

        await tick();

        if (secretElem) {
            let range = document.createRange();
            range.selectNode(secretElem);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
    }
</script>

<button
    tabindex="-1"
    type="button"
    aria-label="生成"
    class="btn btn-circle {classes}"
    use:tooltip={togglerActive ? "" : "生成"}
>
    <i class="ri-sparkling-line" aria-hidden="true" />
    <Toggler
        class="dropdown dropdown-upside dropdown-center dropdown-nowrap"
        bind:active={togglerActive}
        on:show={generate}
    >
        <div class="flex flex-gap-5 p-5">
            <span bind:this={secretElem} class="secret">{secret}</span>
            <CopyIcon value={secret} />
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <i
                class="ri-refresh-line txt-sm link-hint"
                use:tooltip={"刷新"}
                aria-label="刷新"
                on:click={generate}
            />
        </div>
    </Toggler>
</button>

<style>
    .secret {
        font-family: monospace;
        font-weight: normal;
        user-select: all;
    }
</style>
