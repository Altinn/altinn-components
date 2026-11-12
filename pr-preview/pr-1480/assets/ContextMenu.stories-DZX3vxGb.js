var I=Object.defineProperty;var m=(i,l)=>I(i,"name",{value:l,configurable:!0});import{a6 as r}from"./iframe-CrglqwQn.js";import{S as H}from"./ArrowRedo-Cfk1jcFY.js";import{S as T}from"./EyeClosed-CK_w1lXL.js";import{S as E}from"./Archive-QnejR0rZ.js";import{S as f}from"./Trash-D8Yx43MO.js";import{S as D}from"./ClockDashed-DPlMd02p.js";import{C as u}from"./ContextMenu-Bpxx0kh4.js";import{i as v}from"./inboxSearchResults-BMDPLOpZ.js";import{S as y}from"./TeddyBear-Csv0MdVl.js";import{L as B}from"./List-CzL7cSjO.js";import{D as x}from"./DialogListItem-DFOXRuIs.js";import{L as b}from"./ListItem-CuGpAVUP.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-WGsW3heI.js";import"./useIsDesktop-BFXmchO7.js";import"./Dropdown-Bs8XHg5O.js";import"./SearchField-C2qhyCtD.js";import"./MagnifyingGlass-C-uYCvZ7.js";import"./MenuListItem-BrJu3vrY.js";import"./MenuListDivider-BYAuSbm9.js";import"./MenuItem-BOpoNs7B.js";import"./CheckboxUncheckedIcon-CXEG0Svy.js";import"./RadioUncheckedIcon-BvYRqxVQ.js";import"./ItemMedia-CKHqoxmK.js";import"./Avatar-CdjH483A.js";import"./AvatarGroup-BVlT7mXX.js";import"./ItemLabel-C8AtzUlo.js";import"./Heading-Cue2sNHi.js";import"./useHighlightedText-BwDaK6ea.js";import"./ItemControls-BCjOivMY.js";import"./Badge-DecVHfU_.js";import"./Tooltip-C3l4V9U1.js";import"./ChevronRight-DGfPuTVb.js";import"./FieldBase-B81pLsMF.js";import"./Typography-BczTYRHT.js";import"./Field-2w0B3_JZ.js";import"./Label-DGjLhU1K.js";import"./Input-CFGd0v58.js";import"./useMenu-8J-CXIB0.js";import"./InformationSquare-BOQji3ZT.js";import"./dialogs-BVpSyf3J.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Cmb1gdOj.js";import"./AttachmentList-7FVOn-hS.js";import"./File-mT0V8g7z.js";import"./Section-DbuH07eX.js";import"./Flex-DJ9jSUVh.js";import"./TransmissionList-pD1jOaDB.js";import"./Transmission-BtjRhmbI.js";import"./SeenByLog-Bz2tN8gj.js";import"./SeenByLogItem-kaBVzLdt.js";import"./Byline-DiXajScB.js";import"./SeenByLogButton-TmTSfRzU.js";import"./Divider-BmN4lx7n.js";import"./DialogActions-CRLY5Mt5.js";import"./ButtonGroup-DBlS54nG.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-iw1hi8n1.js";import"./ItemLink-DXjQtoHW.js";import"./DialogByline-DJ_Q5pBf.js";import"./DialogMetadata-C0_Axs5G.js";import"./DialogStatus-CyqkUlSx.js";import"./Paperclip-BS7qVoGN.js";import"./Files-BwXU2Blw.js";import"./Checkmark-D7BkIwSo.js";import"./MetaBase-B8WWZSb6.js";import"./MetaItem-eD1LWI1F.js";import"./ProgressIcon-Cm4j9HlV.js";import"./ChevronUp-fcfSgUs-.js";import"./ChevronDown-qCwX9ScZ.js";const{expect:t,userEvent:e,waitFor:o,within:h}=__STORYBOOK_MODULE_TEST__,Qt={title:"Menu/ContextMenu",component:u,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:H,title:"Del og gi tilgang",onClick:m(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:T,title:"Marker som ny"},{id:"3",groupId:"2",icon:E,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:f,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},p={args:{id:"context-menu-default"},play:m(async({canvasElement:i})=>{const l=h(i),a=h(document.body),n=m(()=>l.getByRole("button"),"getButton");await e.click(n());const c=await a.findByRole("menu");await t(document.querySelectorAll('[role="menu"]')).toHaveLength(1),await t(c.closest('[role="dialog"]')).toBeNull();const w=c.closest("[popover]");await t(w.matches(":popover-open")).toBe(!0),await t(w.matches(":modal")).toBe(!1),await t(n()).toHaveAttribute("aria-haspopup","menu"),await t(n()).toHaveAttribute("aria-expanded","true"),await t(n()).toHaveAttribute("aria-controls",c.id),await t(c).toHaveAttribute("aria-labelledby",n().id);const s=m(()=>document.getElementById(c.getAttribute("aria-activedescendant")??""),"activeItem");await o(()=>t(c).toHaveFocus()),await o(()=>t(s()).toHaveTextContent("Del og gi tilgang")),await t(s()).toHaveAttribute("role","menuitem"),await e.keyboard("{ArrowDown}"),await o(()=>t(s()).toHaveTextContent("Marker som ny")),await e.keyboard("{End}"),await o(()=>t(s()).toHaveTextContent("Aktivitetslogg")),await e.keyboard("{Home}"),await o(()=>t(s()).toHaveTextContent("Del og gi tilgang")),await e.keyboard("f"),await o(()=>t(s()).toHaveTextContent("Flytt til arkiv")),await e.keyboard("f"),await o(()=>t(s()).toHaveTextContent("Flytt til papirkurv")),await e.tab(),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(n()).toHaveFocus()),await e.click(n()),await a.findByRole("menu"),await e.keyboard("{Escape}"),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(n()).toHaveFocus()),await e.click(n()),await o(()=>t(a.getByRole("menu")).toHaveFocus()),await e.keyboard(" "),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await e.click(n()),await e.click(i),await t(a.queryByRole("menu")).not.toBeInTheDocument(),await e.click(n());const k=a.getByText("Flytt til arkiv");await e.click(k),await t(a.queryByRole("menu")).not.toBeInTheDocument()},"play")},d={render:m(i=>r.jsxs(B,{children:[r.jsx(b,{title:"As badge",icon:y,linkIcon:!0,badge:r.jsx(u,{...i,placement:"right",id:"menu-1"})}),r.jsx(b,{title:"As controls",icon:y,controls:r.jsx(u,{...i,placement:"right",id:"menu-2"})})]}),"render")},g={render:m(i=>{const l=v.items[0],a=v.items[1];return r.jsxs(B,{children:[r.jsx(x,{...l,controls:r.jsx(u,{...i,placement:"right",id:"menu-1"})}),r.jsx(x,{...a,controls:r.jsx(u,{...i,placement:"right",id:"menu-2"})})]})},"render")},Vt=["Default","ListControls","DialogControls"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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

    // the menu takes focus and points out its active item
    const activeItem = () => document.getElementById(menu.getAttribute('aria-activedescendant') ?? '');
    await waitFor(() => expect(menu).toHaveFocus());
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
    await waitFor(() => expect(body.getByRole('menu')).toHaveFocus());
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...g.parameters?.docs?.source}}};export{p as Default,g as DialogControls,d as ListControls,Vt as __namedExportsOrder,Qt as default};
