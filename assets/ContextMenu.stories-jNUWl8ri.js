import{a7 as t}from"./iframe-COBbWeA3.js";import{S as b}from"./ArrowRedo-CAljGxYv.js";import{S as v}from"./EyeClosed-CwaZd888.js";import{S as I}from"./Archive-BBSn7y3F.js";import{S as k}from"./Trash-C2miCmJW.js";import{S as w}from"./ClockDashed-BqmDpaFL.js";import{C as n}from"./ContextMenu-CrIvz9QE.js";import{i as l}from"./inboxSearchResults-D0LzmIvy.js";import{S as u}from"./TeddyBear-DUYyvgMk.js";import{L as x}from"./List-BOhzxjoW.js";import{D as d}from"./DialogListItem-Lc3BHSWS.js";import{L as g}from"./ListItem-CFne46Z7.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BLmBdG76.js";import"./Dropdown-B2n1P303.js";import"./SearchField-C1W3zbfq.js";import"./MagnifyingGlass-BZ6J5iab.js";import"./FieldBase-DRB9b-3z.js";import"./Typography-BEwm6wl9.js";import"./useHighlightedText-CaUkEEvw.js";import"./Field-QFb6ZZM4.js";import"./Label-C-viX-1h.js";import"./Input-BuLWJ9G8.js";import"./useMenu-C3_JQO79.js";import"./MenuListItem-BpH-lOdT.js";import"./MenuListDivider-C_auds-g.js";import"./MenuListHeading-BpdGMS_N.js";import"./MenuItem-nArOW8Hu.js";import"./ItemMedia-CVZylXEj.js";import"./Avatar-DxGMGD7I.js";import"./AvatarGroup-AOdZQtKF.js";import"./Checkmark-nzyjGA6l.js";import"./ItemLabel-BFAcVwUa.js";import"./Heading-Cmg-mUrR.js";import"./ItemControls-DB9Qd_W5.js";import"./Badge-0q-IE2XW.js";import"./Tooltip-DupjxGOM.js";import"./ChevronRight-gAwtmJAo.js";import"./InformationSquare-DlnV5Jxm.js";import"./MenuElipsisHorizontal-CTMR9KRD.js";import"./dialogs-4xGZKSNw.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DDoIhhvc.js";import"./AttachmentList-gVnUZxPL.js";import"./AttachmentLink-CvAR02ST.js";import"./File-CepsweWe.js";import"./Section-4iuaFN40.js";import"./Flex-D1m969Q2.js";import"./TransmissionList-CYv822Tr.js";import"./Transmission-Cebsz00a.js";import"./SeenByLog-8JgauTnX.js";import"./SeenByLogItem-B4kpFSbT.js";import"./Byline-COYo-T98.js";import"./SeenByLogButton-DQQoRd1N.js";import"./Divider-Cs_mi-R8.js";import"./DialogActions-CRgbsVFP.js";import"./ButtonGroupDivider-D67s8T3a.js";import"./ChevronUp-BDeeV8M4.js";import"./ChevronDown-DuT6TpEz.js";import"./DropdownBase-Cx1aRZAk.js";import"./useClickOutside-Dna1UTzc.js";import"./ButtonGroup-BLVUIK36.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Dh7qzoHA.js";import"./ItemLink-DTMH6OJr.js";import"./DialogByline-D74JMEvf.js";import"./DialogMetadata-YhapENL4.js";import"./DialogStatus-CrlSTf9-.js";import"./Paperclip-Bcvr-q7P.js";import"./Files-C4_DOEL7.js";import"./MetaBase-Dqbp54mZ.js";import"./MetaItem-C2UqQc3c.js";import"./ProgressIcon-DMfYy_YE.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
