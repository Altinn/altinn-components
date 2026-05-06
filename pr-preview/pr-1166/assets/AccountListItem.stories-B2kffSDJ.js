import{j as t}from"./iframe-Cppd0qv6.js";import{S as a}from"./Handshake-BSTLSyDF.js";import{S as e}from"./Bell-DWON3UYE.js";import{S as s}from"./Hashtag-DOFpQoHe.js";import{S as n}from"./Files-DcPOTvKQ.js";import{A as p}from"./AccountListItem-IY_e0JQv.js";import{L as m}from"./List-B3lNMupF.js";import{A as l}from"./AccountListItemDetails-Cs_XCTki.js";import{B as c}from"./Button-DZtlkh8w.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BBgZM5Xr.js";import"./ListItem-BWQ_dxae.js";import"./index-BRImx9w3.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./lite-DaUVFjkg.js";import"./XMark-xtLLERRk.js";import"./Icon-DYZqEJGr.js";import"./Skeleton-DZL_2b5i.js";import"./Avatar-C8BEFMoW.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BVudX8AY.js";import"./Heading-CVWk1BMK.js";import"./useHighlightedText-CnlmbfHa.js";import"./ChevronUp-BQWLGwxf.js";import"./ChevronDown-DyFLAVGh.js";import"./ChevronRight-CWvUN_3J.js";import"./HeartFill-Bgtm1EQq.js";import"./ContextMenu-C6NdKlu4.js";import"./useDropdownMenuController-BL3HRjvJ.js";import"./Dropdown-CazJ30ul.js";import"./MenuElipsisHorizontal-E1vulT3j.js";import"./SearchField-Cfz4mYX1.js";import"./MagnifyingGlass-D5_sNBXy.js";import"./FieldBase-AUbtsXZu.js";import"./Typography-CFy91Abt.js";import"./Label-BZYzljw4.js";import"./index-DZ9ad6Vq.js";import"./MenuListItem-BHtHmzZq.js";import"./MenuListHeading-DGbRdhBr.js";import"./MenuItem-DujpBTEw.js";import"./ItemMedia-B28DyjI4.js";import"./Checkmark-Ci2lQnJg.js";import"./ItemControls-D1uxt3OD.js";import"./useMenu-Dh0AdFxf.js";import"./InformationSquare-C6gp2qmA.js";import"./Flex-BPZu7a_-.js";import"./Section-B6Kfhq0f.js";import"./ButtonGroup-DWofFi2X.js";import"./Divider-DkVfc8bj.js";import"./SettingsItem-Dr-r7mZw.js";import"./SettingsItemBase-BPkLG8tg.js";import"./ItemLink-C9wl5dRr.js";import"./SettingsModal-DDq2i2rR.js";import"./ModalBody-BEyoSkmL.js";import"./ButtonIcon-DZ5ghlk2.js";import"./ButtonLabel-BABBlGuL.js";import"./AccountOrganization-D9gtJUpK.js";import"./Byline-joygHiwG.js";import"./button-DXqTFqXv.js";const Dt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const ft=["Default","Expanded"];export{r as Default,i as Expanded,ft as __namedExportsOrder,Dt as default};
