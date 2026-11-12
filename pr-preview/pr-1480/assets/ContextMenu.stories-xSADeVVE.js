var I=Object.defineProperty;var m=(i,l)=>I(i,"name",{value:l,configurable:!0});import{a6 as r}from"./iframe-M-0W2Kc9.js";import{S as H}from"./ArrowRedo-Cnr0MewE.js";import{S as T}from"./EyeClosed-B6ePw3XW.js";import{S as E}from"./Archive-BppFJWLm.js";import{S as f}from"./Trash-DszqcR2r.js";import{S as D}from"./ClockDashed-CE3rKYo4.js";import{C as u}from"./ContextMenu-BvjrPqZd.js";import{i as v}from"./inboxSearchResults-CixFnAsQ.js";import{S as y}from"./TeddyBear-DVxK5Nio.js";import{L as B}from"./List-DiNCcd8p.js";import{D as x}from"./DialogListItem-DJZPyH0c.js";import{L as b}from"./ListItem-Cy-G_cYd.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./SearchField-IrO9fkpT.js";import"./MagnifyingGlass-BCQWJszI.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ItemLabel-lDW_MVeZ.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronRight-e5zm3v6Y.js";import"./FieldBase-Bv-PdLp_.js";import"./Typography-xHph4zf_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./useMenu-D1I6Xbj7.js";import"./InformationSquare-DDYjH-iE.js";import"./dialogs-B2fxhoxP.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D7HbIKOl.js";import"./AttachmentList-BgxSY5ob.js";import"./File-b6f9An55.js";import"./Section-BRRFv94H.js";import"./Flex-CvQqYnnc.js";import"./TransmissionList-CDSU6hv6.js";import"./Transmission-BAzo6gFp.js";import"./SeenByLog-WXIj0G2W.js";import"./SeenByLogItem-C4grObKG.js";import"./Byline-Cay2D8Wn.js";import"./SeenByLogButton-Dqii6KAo.js";import"./Divider-Dx4dxp6X.js";import"./DialogActions-D5ddMbLf.js";import"./ButtonGroup-C-A48uAy.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-F0Gk4WOT.js";import"./ItemLink-CCAm3_Nh.js";import"./DialogByline-BTy4enVK.js";import"./DialogMetadata-Chvl_AXb.js";import"./DialogStatus-YkbO9KY3.js";import"./Paperclip-DpctCjls.js";import"./Files-D24Nxx7v.js";import"./Checkmark-v-SGYEEX.js";import"./MetaBase-5MtgNp_l.js";import"./MetaItem-BCHZnHPk.js";import"./ProgressIcon-FB37U0uQ.js";import"./ChevronUp-D7bAfZe9.js";import"./ChevronDown-oFv1HZMB.js";const{expect:t,userEvent:e,waitFor:o,within:h}=__STORYBOOK_MODULE_TEST__,Qt={title:"Menu/ContextMenu",component:u,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:H,title:"Del og gi tilgang",onClick:m(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:T,title:"Marker som ny"},{id:"3",groupId:"2",icon:E,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:f,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},p={args:{id:"context-menu-default"},play:m(async({canvasElement:i})=>{const l=h(i),a=h(document.body),n=m(()=>l.getByRole("button"),"getButton");await e.click(n());const c=await a.findByRole("menu");await t(document.querySelectorAll('[role="menu"]')).toHaveLength(1),await t(c.closest('[role="dialog"]')).toBeNull();const w=c.closest("[popover]");await t(w.matches(":popover-open")).toBe(!0),await t(w.matches(":modal")).toBe(!1),await t(n()).toHaveAttribute("aria-haspopup","menu"),await t(n()).toHaveAttribute("aria-expanded","true"),await t(n()).toHaveAttribute("aria-controls",c.id),await t(c).toHaveAttribute("aria-labelledby",n().id);const s=m(()=>document.getElementById(c.getAttribute("aria-activedescendant")??""),"activeItem");await o(()=>t(c).toHaveFocus()),await o(()=>t(s()).toHaveTextContent("Del og gi tilgang")),await t(s()).toHaveAttribute("role","menuitem"),await e.keyboard("{ArrowDown}"),await o(()=>t(s()).toHaveTextContent("Marker som ny")),await e.keyboard("{End}"),await o(()=>t(s()).toHaveTextContent("Aktivitetslogg")),await e.keyboard("{Home}"),await o(()=>t(s()).toHaveTextContent("Del og gi tilgang")),await e.keyboard("f"),await o(()=>t(s()).toHaveTextContent("Flytt til arkiv")),await e.keyboard("f"),await o(()=>t(s()).toHaveTextContent("Flytt til papirkurv")),await e.tab(),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(n()).toHaveFocus()),await e.click(n()),await a.findByRole("menu"),await e.keyboard("{Escape}"),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(n()).toHaveFocus()),await e.click(n()),await o(()=>t(a.getByRole("menu")).toHaveFocus()),await e.keyboard(" "),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await e.click(n()),await e.click(i),await t(a.queryByRole("menu")).not.toBeInTheDocument(),await e.click(n());const k=a.getByText("Flytt til arkiv");await e.click(k),await t(a.queryByRole("menu")).not.toBeInTheDocument()},"play")},d={render:m(i=>r.jsxs(B,{children:[r.jsx(b,{title:"As badge",icon:y,linkIcon:!0,badge:r.jsx(u,{...i,placement:"right",id:"menu-1"})}),r.jsx(b,{title:"As controls",icon:y,controls:r.jsx(u,{...i,placement:"right",id:"menu-2"})})]}),"render")},g={render:m(i=>{const l=v.items[0],a=v.items[1];return r.jsxs(B,{children:[r.jsx(x,{...l,controls:r.jsx(u,{...i,placement:"right",id:"menu-1"})}),r.jsx(x,{...a,controls:r.jsx(u,{...i,placement:"right",id:"menu-2"})})]})},"render")},Vt=["Default","ListControls","DialogControls"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
