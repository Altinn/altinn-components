var f=Object.defineProperty;var c=(e,r)=>f(e,"name",{value:r,configurable:!0});import{a7 as a}from"./iframe-r-PzxnFG.js";import{S as H}from"./ArrowRedo-DIywjVZv.js";import{S as I}from"./EyeClosed-Cc_5G8cI.js";import{S as R}from"./Archive-CAWbyIsL.js";import{S as C}from"./Trash-0c2zCAv3.js";import{S as D}from"./ClockDashed-wZFtld5l.js";import{C as l}from"./ContextMenu-Cek1quhS.js";import{i as h}from"./inboxSearchResults-BZvaSlYl.js";import{S as x}from"./TeddyBear-DqGEgM-O.js";import{L as E}from"./List-DKe_PVra.js";import{D as B}from"./DialogListItem-Da1oRIb6.js";import{L as k}from"./ListItem-SAy6Qdz6.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./useMenu-BMl9Yb_c.js";import"./InformationSquare-x0k9ph8l.js";import"./dialogs-CIwG60Cr.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-P2jHTF0O.js";import"./AttachmentList-CkdmE0xd.js";import"./File-fzT31g4X.js";import"./Section-DH0F_yu4.js";import"./Flex-DRLqoZbu.js";import"./TransmissionList-RRuAwLky.js";import"./Transmission-BJXNw36K.js";import"./SeenByLog-CAwaTAzQ.js";import"./SeenByLogItem-C73Tg94d.js";import"./Byline-Cm30yNti.js";import"./SeenByLogButton-v_nAdJma.js";import"./Divider-Cj6losdy.js";import"./DialogActions-Dv3sgD9Q.js";import"./ButtonGroup-tpSmkUGs.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CTpIDqLP.js";import"./ItemLink-BAk2uFkE.js";import"./DialogByline-BLJ-wwgh.js";import"./DialogMetadata-BiQnYk_E.js";import"./DialogStatus-B4KP3lh3.js";import"./Paperclip-oc5U4BkP.js";import"./Files-CJyaA0av.js";import"./Checkmark-D0ulgpJN.js";import"./MetaBase-DWF39a8o.js";import"./MetaItem-o4t8J6W2.js";import"./ProgressIcon-DuLERIKp.js";import"./ChevronUp-B0s8dawY.js";import"./ChevronDown-BD5i-hxE.js";const{expect:t,userEvent:n,waitFor:o,within:p}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:l,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:H,title:"Del og gi tilgang",onClick:c(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:I,title:"Marker som ny"},{id:"3",groupId:"2",icon:R,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:C,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},y={args:{id:"context-menu-default"},play:c(async({canvasElement:e})=>{const r=p(e),i=p(document.body),s=c(()=>r.getByRole("button"),"getButton");await n.click(s());const m=await i.findByRole("menu");await t(document.querySelectorAll('[role="menu"]')).toHaveLength(1),await t(m.closest('[role="dialog"]')).toBeNull();const w=m.closest("[popover]");await t(w.matches(":popover-open")).toBe(!0),await t(w.matches(":modal")).toBe(!1),await t(s()).toHaveAttribute("aria-haspopup","menu"),await t(s()).toHaveAttribute("aria-expanded","true"),await t(s()).toHaveAttribute("aria-controls",m.id),await t(m).toHaveAttribute("aria-labelledby",s().id);const u=c(()=>document.activeElement,"activeItem");await o(()=>t(m.contains(document.activeElement)).toBe(!0)),await t(m).not.toHaveAttribute("aria-activedescendant"),await o(()=>t(u()).toHaveTextContent("Del og gi tilgang")),await t(u()).toHaveAttribute("role","menuitem"),await n.keyboard("{ArrowDown}"),await o(()=>t(u()).toHaveTextContent("Marker som ny")),await n.keyboard("{End}"),await o(()=>t(u()).toHaveTextContent("Aktivitetslogg")),await n.keyboard("{Home}"),await o(()=>t(u()).toHaveTextContent("Del og gi tilgang")),await n.keyboard("f"),await o(()=>t(u()).toHaveTextContent("Flytt til arkiv")),await n.keyboard("f"),await o(()=>t(u()).toHaveTextContent("Flytt til papirkurv")),await n.tab(),await o(()=>t(i.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(s()).toHaveFocus()),await n.click(s()),await i.findByRole("menu"),await n.keyboard("{Escape}"),await o(()=>t(i.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(s()).toHaveFocus()),await n.click(s()),await o(()=>t(i.getByRole("menu").contains(document.activeElement)).toBe(!0)),await n.keyboard(" "),await o(()=>t(i.queryByRole("menu")).not.toBeInTheDocument()),await n.click(s()),await n.click(e),await t(i.queryByRole("menu")).not.toBeInTheDocument(),await n.click(s());const T=i.getByText("Flytt til arkiv");await n.click(T),await t(i.queryByRole("menu")).not.toBeInTheDocument()},"play")},d={parameters:{screenshot:{skip:!0}},render:c(e=>a.jsxs(a.Fragment,{children:[a.jsx(l,{...e,id:"cm-a",label:"Skattemelding 2024"}),a.jsx(l,{...e,id:"cm-b",label:"Søknad om barnehageplass"}),a.jsx(l,{...e,id:"cm-c","aria-label":"Handlinger for kladden"})]}),"render"),play:c(async({canvasElement:e})=>{const r=p(e);await t(r.getByRole("button",{name:"Åpne meny: Skattemelding 2024"})).toBeInTheDocument(),await t(r.getByRole("button",{name:"Åpne meny: Søknad om barnehageplass"})).toBeInTheDocument(),await n.click(r.getByRole("button",{name:"Handlinger for kladden"}));const i=await p(document.body).findByRole("menu");await t(r.getByRole("button",{name:"Handlinger for kladden"})).toHaveAttribute("aria-expanded","true"),await t(i).toHaveAccessibleName("Handlinger for kladden"),await n.keyboard("{Escape}"),await o(()=>t(p(document.body).queryByRole("menu")).not.toBeInTheDocument())},"play")},g={parameters:{screenshot:{skip:!0}},render:c(e=>a.jsx("div",{style:{height:"300vh",paddingTop:"40vh"},children:a.jsx(l,{...e,id:"cm-scroll",placement:"right"})}),"render"),play:c(async({canvasElement:e})=>{const r=c(()=>p(e).getByRole("button"),"button");await n.click(r());const s=(await p(document.body).findByRole("menu")).closest("[popover]"),m=c(()=>s.getBoundingClientRect().top-r().getBoundingClientRect().bottom,"gap");await o(()=>t(Math.abs(m())).toBeLessThan(20));const w=m();window.scrollBy(0,200),await o(()=>t(Math.abs(m()-w)).toBeLessThan(2)),await n.keyboard("{Escape}"),window.scrollTo(0,0)},"play")},v={render:c(e=>a.jsxs(E,{children:[a.jsx(k,{title:"As badge",icon:x,linkIcon:!0,badge:a.jsx(l,{...e,placement:"right",id:"menu-1"})}),a.jsx(k,{title:"As controls",icon:x,controls:a.jsx(l,{...e,placement:"right",id:"menu-2"})})]}),"render")},b={render:c(e=>{const r=h.items[0],i=h.items[1];return a.jsxs(E,{children:[a.jsx(B,{...r,controls:a.jsx(l,{...e,placement:"right",id:"menu-1"})}),a.jsx(B,{...i,controls:a.jsx(l,{...e,placement:"right",id:"menu-2"})})]})},"render")},Zt=["Default","NamedAfterItem","FollowsButtonOnScroll","ListControls","DialogControls"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: (args: ContextMenuProps) => <>
      <ContextMenu {...args} id="cm-a" label="Skattemelding 2024" />
      <ContextMenu {...args} id="cm-b" label="Søknad om barnehageplass" />
      <ContextMenu {...args} id="cm-c" aria-label="Handlinger for kladden" />
    </>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Åpne meny: Skattemelding 2024'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Åpne meny: Søknad om barnehageplass'
    })).toBeInTheDocument();
    // An aria-label from the app wins, and is no longer replaced by the tooltip.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Handlinger for kladden'
    }));

    // The name stays the same while the menu is open, and names the menu.
    const menu = await within(document.body).findByRole('menu');
    await expect(canvas.getByRole('button', {
      name: 'Handlinger for kladden'
    })).toHaveAttribute('aria-expanded', 'true');
    await expect(menu).toHaveAccessibleName('Handlinger for kladden');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('menu')).not.toBeInTheDocument());
  }
}`,...d.parameters?.docs?.source},description:{story:"In a list every item has its own menu button, so each button says what it belongs to.",...d.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: (args: ContextMenuProps) => <div style={{
    height: '300vh',
    paddingTop: '40vh'
  }}>
      <ContextMenu {...args} id="cm-scroll" placement="right" />
    </div>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // The button is rendered anew when the menu opens, so look it up each time.
    const button = () => within(canvasElement).getByRole('button');
    await userEvent.click(button());
    const menu = await within(document.body).findByRole('menu');
    const panel = menu.closest('[popover]') as HTMLElement;
    const gap = () => panel.getBoundingClientRect().top - button().getBoundingClientRect().bottom;
    await waitFor(() => expect(Math.abs(gap())).toBeLessThan(20));
    const before = gap();
    window.scrollBy(0, 200);
    await waitFor(() => expect(Math.abs(gap() - before)).toBeLessThan(2));
    await userEvent.keyboard('{Escape}');
    window.scrollTo(0, 0);
  }
}`,...g.parameters?.docs?.source},description:{story:"The open menu follows its button when the page scrolls.",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...b.parameters?.docs?.source}}};export{y as Default,b as DialogControls,g as FollowsButtonOnScroll,v as ListControls,d as NamedAfterItem,Zt as __namedExportsOrder,Xt as default};
