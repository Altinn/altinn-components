var E=Object.defineProperty;var s=(i,l)=>E(i,"name",{value:l,configurable:!0});import{a7 as r}from"./iframe-xlSYDLmX.js";import{S as I}from"./ArrowRedo-Duj5BOPt.js";import{S as H}from"./EyeClosed-CeHnqaI7.js";import{S as T}from"./Archive-DNZp7WUs.js";import{S as f}from"./Trash-Dtf6X4Tk.js";import{S as D}from"./ClockDashed-tCUkFT44.js";import{C as u}from"./ContextMenu-DIOKC6O7.js";import{i as v}from"./inboxSearchResults-Cb4N3gjS.js";import{S as y}from"./TeddyBear-DqxIYJLl.js";import{L as h}from"./List-4DslVlnz.js";import{D as x}from"./DialogListItem-Ciyf68PL.js";import{L as b}from"./ListItem-B7QDJ_pJ.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-DGUZzvC0.js";import"./useIsDesktop-6yxnkXHf.js";import"./Dropdown-CsBuGo6i.js";import"./SearchField-Cm1bebf2.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./MenuListItem-C1VHk2tM.js";import"./MenuListDivider-B_1so_ti.js";import"./MenuItem-BLhJ1hxZ.js";import"./CheckboxUncheckedIcon-DH-Lidl1.js";import"./RadioUncheckedIcon-C7ew2nKt.js";import"./ItemMedia-DF0c3SDh.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./ItemLabel-eTSb-Z0L.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ItemControls-Dlw9_sua.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./ChevronRight-WLOtysjI.js";import"./FieldBase-CKEKDcDW.js";import"./Typography-CBKRdQ-b.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./Input-r4bRN1Qy.js";import"./useMenu-C7Dhr05-.js";import"./InformationSquare-DlLj2oH8.js";import"./dialogs-DYEH--US.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Cu-bvWXg.js";import"./AttachmentList-nyR4RzCq.js";import"./File-BRQkQvkt.js";import"./Section-Dg4Yy1fe.js";import"./Flex-Brl5o9wf.js";import"./TransmissionList-D6AjWVyI.js";import"./Transmission-CdX_OX2b.js";import"./SeenByLog-CUhO0OQ8.js";import"./SeenByLogItem-Cy6sqJ9g.js";import"./Byline-lo6AH7M_.js";import"./SeenByLogButton-BSK-CwZM.js";import"./Divider-DywCGJJG.js";import"./DialogActions-CJwjM51X.js";import"./ButtonGroup-CmZy2FTH.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-D6wd74Ed.js";import"./ItemLink-DzpDCAH4.js";import"./DialogByline-BjzpFsJJ.js";import"./DialogMetadata-CzGd2SRQ.js";import"./DialogStatus-CGbrHyo3.js";import"./Paperclip-Ys9tITkh.js";import"./Files-Ck40F7-a.js";import"./Checkmark-opEEWy2T.js";import"./MetaBase-Hn495RIe.js";import"./MetaItem-zQWNfXIG.js";import"./ProgressIcon-B24OjVQT.js";import"./ChevronUp-SNqOJLK8.js";import"./ChevronDown-BV4f9W92.js";const{expect:t,userEvent:e,waitFor:o,within:B}=__STORYBOOK_MODULE_TEST__,Qt={title:"Menu/ContextMenu",component:u,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:s(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:H,title:"Marker som ny"},{id:"3",groupId:"2",icon:T,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:f,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},p={args:{id:"context-menu-default"},play:s(async({canvasElement:i})=>{const l=B(i),a=B(document.body),n=s(()=>l.getByRole("button"),"getButton");await e.click(n());const c=await a.findByRole("menu");await t(document.querySelectorAll('[role="menu"]')).toHaveLength(1),await t(c.closest('[role="dialog"]')).toBeNull();const g=c.closest("[popover]");await t(g.matches(":popover-open")).toBe(!0),await t(g.matches(":modal")).toBe(!1),await t(n()).toHaveAttribute("aria-haspopup","menu"),await t(n()).toHaveAttribute("aria-expanded","true"),await t(n()).toHaveAttribute("aria-controls",c.id),await t(c).toHaveAttribute("aria-labelledby",n().id);const m=s(()=>document.activeElement,"activeItem");await o(()=>t(c.contains(document.activeElement)).toBe(!0)),await t(c).not.toHaveAttribute("aria-activedescendant"),await o(()=>t(m()).toHaveTextContent("Del og gi tilgang")),await t(m()).toHaveAttribute("role","menuitem"),await e.keyboard("{ArrowDown}"),await o(()=>t(m()).toHaveTextContent("Marker som ny")),await e.keyboard("{End}"),await o(()=>t(m()).toHaveTextContent("Aktivitetslogg")),await e.keyboard("{Home}"),await o(()=>t(m()).toHaveTextContent("Del og gi tilgang")),await e.keyboard("f"),await o(()=>t(m()).toHaveTextContent("Flytt til arkiv")),await e.keyboard("f"),await o(()=>t(m()).toHaveTextContent("Flytt til papirkurv")),await e.tab(),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(n()).toHaveFocus()),await e.click(n()),await a.findByRole("menu"),await e.keyboard("{Escape}"),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(n()).toHaveFocus()),await e.click(n()),await o(()=>t(a.getByRole("menu").contains(document.activeElement)).toBe(!0)),await e.keyboard(" "),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await e.click(n()),await e.click(i),await t(a.queryByRole("menu")).not.toBeInTheDocument(),await e.click(n());const k=a.getByText("Flytt til arkiv");await e.click(k),await t(a.queryByRole("menu")).not.toBeInTheDocument()},"play")},d={render:s(i=>r.jsxs(h,{children:[r.jsx(b,{title:"As badge",icon:y,linkIcon:!0,badge:r.jsx(u,{...i,placement:"right",id:"menu-1"})}),r.jsx(b,{title:"As controls",icon:y,controls:r.jsx(u,{...i,placement:"right",id:"menu-2"})})]}),"render")},w={render:s(i=>{const l=v.items[0],a=v.items[1];return r.jsxs(h,{children:[r.jsx(x,{...l,controls:r.jsx(u,{...i,placement:"right",id:"menu-1"})}),r.jsx(x,{...a,controls:r.jsx(u,{...i,placement:"right",id:"menu-2"})})]})},"render")},Vt=["Default","ListControls","DialogControls"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    // the button is rendered anew when the menu opens and closes, so look it up each time
    const getButton = () => canvas.getByRole('button');
    await userEvent.click(getButton());

    // one menu, named by its button, and nothing around it claims to be a menu or a dialog
    const menu = await body.findByRole('menu');
    await expect(document.querySelectorAll('[role="menu"]')).toHaveLength(1);
    await expect(menu.closest('[role="dialog"]')).toBeNull();
    // The panel around it is a native popover in the top layer, not a modal: the page stays usable.
    const panel = menu.closest('[popover]') as HTMLElement;
    await expect(panel.matches(':popover-open')).toBe(true);
    await expect(panel.matches(':modal')).toBe(false);
    await expect(getButton()).toHaveAttribute('aria-haspopup', 'menu');
    await expect(getButton()).toHaveAttribute('aria-expanded', 'true');
    await expect(getButton()).toHaveAttribute('aria-controls', menu.id);
    await expect(menu).toHaveAttribute('aria-labelledby', getButton().id);

    // focus moves to the active item itself, and follows it
    const activeItem = () => document.activeElement as HTMLElement;
    await waitFor(() => expect(menu.contains(document.activeElement)).toBe(true));
    await expect(menu).not.toHaveAttribute('aria-activedescendant');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Del og gi tilgang'));
    await expect(activeItem()).toHaveAttribute('role', 'menuitem');

    // arrow keys, End, Home and type-ahead move the active item
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Marker som ny'));
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Aktivitetslogg'));
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Del og gi tilgang'));
    await userEvent.keyboard('f');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Flytt til arkiv'));
    await userEvent.keyboard('f');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Flytt til papirkurv'));

    // Tab closes the menu and puts focus back on the button
    await userEvent.tab();
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
    await waitFor(() => expect(getButton()).toHaveFocus());

    // Escape does the same
    await userEvent.click(getButton());
    await body.findByRole('menu');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
    await waitFor(() => expect(getButton()).toHaveFocus());

    // Space runs the active item and closes the menu
    await userEvent.click(getButton());
    await waitFor(() => expect(body.getByRole('menu').contains(document.activeElement)).toBe(true));
    await userEvent.keyboard(' ');
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());

    // open the context menu again and close by clicking outside
    await userEvent.click(getButton());
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(getButton());
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...w.parameters?.docs?.source}}};export{p as Default,w as DialogControls,d as ListControls,Vt as __namedExportsOrder,Qt as default};
