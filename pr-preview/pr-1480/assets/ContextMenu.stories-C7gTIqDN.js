var h=Object.defineProperty;var s=(i,c)=>h(i,"name",{value:c,configurable:!0});import{a6 as r}from"./iframe-CqoHfDH7.js";import{S as I}from"./ArrowRedo-DkB6Xu4K.js";import{S as H}from"./EyeClosed-1DO-qJ-O.js";import{S as E}from"./Archive-BpmgVQNb.js";import{S as T}from"./Trash-DDnja0xf.js";import{S as D}from"./ClockDashed-wmdL0CKS.js";import{C as l}from"./ContextMenu-8eaHwukY.js";import{i as w}from"./inboxSearchResults-Cr-kP0JS.js";import{S as v}from"./TeddyBear-DtwqEMVX.js";import{L as k}from"./List-Dy-3Hrrg.js";import{D as y}from"./DialogListItem-DFTeyM5G.js";import{L as x}from"./ListItem-BJLoZMZK.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-jHmlB5TA.js";import"./useIsDesktop-DOYNI_br.js";import"./Dropdown-BxvitPqI.js";import"./SearchField-D-gn40zc.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemMedia-Sf1LoSEA.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ItemLabel-Bv-toCFX.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ChevronRight-jzUrV1wz.js";import"./FieldBase-B4VpsYUB.js";import"./Typography-rh9OwAWr.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./useMenu-DC909dob.js";import"./InformationSquare-B2hWOsOH.js";import"./dialogs-pjZqO89K.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CO2-s-4V.js";import"./AttachmentList-B9pWc7U3.js";import"./File-BV07hQ9P.js";import"./Section-DzgRr51L.js";import"./Flex-zJBPm08F.js";import"./TransmissionList-xneU0gNH.js";import"./Transmission-CZD2ydU3.js";import"./SeenByLog-CEaLdgBA.js";import"./SeenByLogItem-BwC7DOOD.js";import"./Byline-DuB4QGtP.js";import"./SeenByLogButton-Ckeiu4Gf.js";import"./Divider-B8eivR7l.js";import"./DialogActions-D34QlIx1.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BUrta6st.js";import"./ItemLink-BmS9PXKb.js";import"./DialogByline-Tl3FGQU4.js";import"./DialogMetadata-BRWTPSvj.js";import"./DialogStatus-CJI25FUC.js";import"./Paperclip-DtEp_-9S.js";import"./Files-Dr1wJp76.js";import"./Checkmark-6oHZmwOe.js";import"./MetaBase-B319CUFt.js";import"./MetaItem-BOqAsyZi.js";import"./ProgressIcon-B_FVtIQP.js";import"./ChevronUp-BraeWy4W.js";import"./ChevronDown-CPg5ddv-.js";const{expect:t,userEvent:e,waitFor:o,within:b}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:l,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:s(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:H,title:"Marker som ny"},{id:"3",groupId:"2",icon:E,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:T,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},p={args:{id:"context-menu-default"},play:s(async({canvasElement:i})=>{const c=b(i),a=b(document.body),n=s(()=>c.getByRole("button"),"getButton");await e.click(n());const u=await a.findByRole("menu");await t(document.querySelectorAll('[role="menu"]')).toHaveLength(1),await t(u.closest('[role="dialog"]')).toBeNull(),await t(n()).toHaveAttribute("aria-haspopup","menu"),await t(n()).toHaveAttribute("aria-expanded","true"),await t(n()).toHaveAttribute("aria-controls",u.id),await t(u).toHaveAttribute("aria-labelledby",n().id);const m=s(()=>document.getElementById(u.getAttribute("aria-activedescendant")??""),"activeItem");await o(()=>t(u).toHaveFocus()),await o(()=>t(m()).toHaveTextContent("Del og gi tilgang")),await t(m()).toHaveAttribute("role","menuitem"),await e.keyboard("{ArrowDown}"),await o(()=>t(m()).toHaveTextContent("Marker som ny")),await e.keyboard("{End}"),await o(()=>t(m()).toHaveTextContent("Aktivitetslogg")),await e.keyboard("{Home}"),await o(()=>t(m()).toHaveTextContent("Del og gi tilgang")),await e.keyboard("f"),await o(()=>t(m()).toHaveTextContent("Flytt til arkiv")),await e.keyboard("f"),await o(()=>t(m()).toHaveTextContent("Flytt til papirkurv")),await e.tab(),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(n()).toHaveFocus()),await e.click(n()),await a.findByRole("menu"),await e.keyboard("{Escape}"),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await o(()=>t(n()).toHaveFocus()),await e.click(n()),await o(()=>t(a.getByRole("menu")).toHaveFocus()),await e.keyboard(" "),await o(()=>t(a.queryByRole("menu")).not.toBeInTheDocument()),await e.click(n()),await e.click(i),await t(a.queryByRole("menu")).not.toBeInTheDocument(),await e.click(n());const B=a.getByText("Flytt til arkiv");await e.click(B),await t(a.queryByRole("menu")).not.toBeInTheDocument()},"play")},d={render:s(i=>r.jsxs(k,{children:[r.jsx(x,{title:"As badge",icon:v,linkIcon:!0,badge:r.jsx(l,{...i,placement:"right",id:"menu-1"})}),r.jsx(x,{title:"As controls",icon:v,controls:r.jsx(l,{...i,placement:"right",id:"menu-2"})})]}),"render")},g={render:s(i=>{const c=w.items[0],a=w.items[1];return r.jsxs(k,{children:[r.jsx(y,{...c,controls:r.jsx(l,{...i,placement:"right",id:"menu-1"})}),r.jsx(y,{...a,controls:r.jsx(l,{...i,placement:"right",id:"menu-2"})})]})},"render")},Qt=["Default","ListControls","DialogControls"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};export{p as Default,g as DialogControls,d as ListControls,Qt as __namedExportsOrder,Jt as default};
