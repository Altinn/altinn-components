var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-CFooeFlc.js";import{S as l}from"./Handshake-D3rlMEzW.js";import{S as a}from"./Bell-s-5O088M.js";import{S as m}from"./Hashtag-D1SVqKLA.js";import{S as c}from"./Files-XaiSA667.js";import{A as g}from"./AccountListItem-XuP_MQxq.js";import{A as d}from"./AccountListItemDetails-Dp773BOj.js";import{L as u}from"./List-Bol19yIV.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-C2Qf4kSI.js";import"./Input-CijTBA3T.js";import"./Avatar-BMLgJvdJ.js";import"./AvatarGroup-O59IIMZ1.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./Heading-BvwzGhlC.js";import"./useHighlightedText-CSeb_EVo.js";import"./ChevronUp-2AABqykr.js";import"./ChevronDown-DRjCt-FM.js";import"./ChevronRight-Pp6aFK2W.js";import"./HeartFill-DdHcHph9.js";import"./ContextMenu-DoDNTdiW.js";import"./useDropdownMenuController-D2ORC09B.js";import"./Dropdown-UxeuVY1V.js";import"./SearchField-vc2j7DYW.js";import"./MagnifyingGlass-BeyjX3_h.js";import"./MenuListItem-lDH_nIX2.js";import"./MenuListDivider-DbxP2E3y.js";import"./MenuItem-Bf8xgsdL.js";import"./CheckboxUncheckedIcon-BUUPFL_h.js";import"./RadioUncheckedIcon-SM_w6gXN.js";import"./ItemMedia-BiITU9Jf.js";import"./ItemLabel-uOYlRqGI.js";import"./ItemControls-a2iPy1rh.js";import"./FieldBase--dF0uMSe.js";import"./Typography-DZMMTX6d.js";import"./Field-XgzC0Js-.js";import"./Label-BITGJPso.js";import"./useMenu-Bq9-gO9j.js";import"./InformationSquare-CkGSwppR.js";import"./Section-Dn7ldTEr.js";import"./Flex-DvJJETpK.js";import"./ButtonGroup-B1Q8fC_M.js";import"./Divider-DaMuzylu.js";import"./SettingsItem-BYgiC-vo.js";import"./SettingsItemBase-BAljSDAd.js";import"./ItemBase-DLuyWZHy.js";import"./ItemLink-CYYhjNlX.js";import"./SettingsModal-DXbxrgRv.js";import"./ModalBody-DNdyJsNZ.js";import"./ButtonIcon-CPVBizt7.js";import"./ButtonLabel-XFoSX1pU.js";import"./AccountOrganization-C2sTEQD0.js";import"./Byline-DN2wvwMz.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,bt as __namedExportsOrder,xt as default};
